export type FilmType = {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
}

export const Film = (film: FilmType) => (
<div>
    <img src={film.Poster} alt={`Poster of movie: ${film.Title}`}/>
<h2>
    {film.Title}
</h2>
<p>{film.Year}</p>
</div>
)