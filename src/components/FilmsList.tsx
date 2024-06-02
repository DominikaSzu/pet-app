import { Film, FilmType } from "./Film";
import { NoResults } from "./NoResults";

export type Props = {
    films: FilmType[];
}

export const FilmsList = ({ films }: Props) => {
    return <div>
        {films && films.length === 0 ? <NoResults/> : films.map(film => <Film key={film.imdbID} {...film}/>)}
    </div>
}