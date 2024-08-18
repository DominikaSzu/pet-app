import { ChangeEvent, useState } from "react";
import "./App.css";
import { Input, FilmsList } from "./components";
import { fetchFilmsByTitle } from "./api";
import useSWR from "swr";

function App() {
  const [inputValue, setInputValue] = useState("");
  const { data, error, isLoading } = useSWR(() => fetchFilmsByTitle(inputValue));
  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);
  if (error) return "An error occurred";
  return (
    <div>
      <h1>Film search</h1>
      <Input value={inputValue} onInputChange={onChangeHandle} />
      {isLoading ? <div>"Loading..."</div> : <FilmsList films={data} />}
    </div>
  );
}

export default App;
