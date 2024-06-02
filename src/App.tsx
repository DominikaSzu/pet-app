import { ChangeEvent, useState } from "react";
import "./App.css";
import { Input, FilmsList } from "./components";
import { useFetchFilmsByTitle } from "./hooks/useFetchFilms";

function App() {
  const [inputValue, setInputValue] = useState("");
  const { error, films, isLoading } = useFetchFilmsByTitle({
    query: inputValue,
  });

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  if (error) return "An error occurred";
  return (
    <div>
      <h1>Film search</h1>
      <Input value={inputValue} onInputChange={onChangeHandle} />
      {isLoading ? <div>"Loading..."</div> : <FilmsList films={films} />}
    </div>
  );
}

export default App;
