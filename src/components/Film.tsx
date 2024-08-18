import { useNavigate } from "react-router-dom";

export type FilmType = {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
};

export const Film = ({ Title, Year, Poster, imdbID }: FilmType) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/film/${imdbID}`)}>
      <img src={Poster} alt={`Poster of movie: ${Title}`} />
      <h2>{Title}</h2>
      <p>{Year}</p>
    </div>
  );
};
