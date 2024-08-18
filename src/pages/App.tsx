import { ChangeEvent, useState } from "react";
import "./App.css";
import { Input, FilmsList } from "../components";
import { fetchFilmsByTitle } from "../api";
import useSWR from "swr";
import { debounce } from "../common/debounce";

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedFetchFilms = debounce({
    callback: () => fetchFilmsByTitle(inputValue),
  });

  const { data, error, isLoading } = useSWR(["films", inputValue], () =>
    fetchFilmsByTitle(inputValue),
  );

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  if (error) return "An error occurred";

  return (
    <div>
      <h1>Film search</h1>
      <Input value={inputValue} onChange={onChangeHandle} />
      {isLoading ? <div>"Loading..."</div> : <FilmsList films={data?.Search} />}
    </div>
  );
};

export default App;
