import { Film, FilmType } from "./Film";

export type Props = {
    films: FilmType[];
}

export const FilmsList = ({ films }: Props) => {
    return <div>
        {films && films.length === 0 ? null : films && films.map(film => <Film key={film.imdbID} {...film}/>)}
    </div>
}