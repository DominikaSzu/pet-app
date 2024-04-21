export type FilmType = {
    Title: string;
    imdbID: string;
}

export const Film = (film: FilmType) => (
<h2>
    {film.Title}
</h2>
)