import { useNavigate } from "react-router-dom";
import { slugify } from "../common/slugify";

export type FilmType = {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
};

export const Film = ({ Title, Year, Poster }: FilmType) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/film/${slugify(Title)}`)}>
      <img src={Poster} alt={`Poster of movie: ${Title}`} />
      <h2>{Title}</h2>
      <p>{Year}</p>
    </div>
  );
};
