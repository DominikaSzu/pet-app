import { useParams } from "react-router-dom";
import { fetchFilmById } from "../api";
import useSWR from "swr";

export const FilmDetails = () => {
  const params = useParams();

  const { data, error, isLoading } = useSWR(["film", params?.id], () =>
    fetchFilmById(params?.id),
  );

  if (isLoading || !data) return;

  if (error) return "An error occurred";

  const { Poster, Title, Year, Plot } = data;

  return (
    <div>
      <img src={Poster} alt={`Poster of movie: ${Title}`} />
      <h2>{Title}</h2>
      <p>{Year}</p>
      <p>{Plot}</p>
    </div>
  );
};
