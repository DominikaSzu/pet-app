export type FilmType = {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
};

export const Film = ({ Title, Year, Poster }: FilmType) => (
  <div>
    <img src={Poster} alt={`Poster of movie: ${Title}`} />
    <h2>{Title}</h2>
    <p>{Year}</p>
  </div>
);
