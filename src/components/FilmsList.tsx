import { Film, FilmType } from "./Film";

export type Props = {
  films: FilmType[];
};

export const FilmsList = ({ films }: Props) => {
  const noFilmsFound = !films || films.length === 0;
  return (
    <div>
      {noFilmsFound
        ? null
        : films.map((film) => <Film key={film.imdbID} {...film} />)}
    </div>
  );
};
