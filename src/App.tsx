import { ChangeEvent, useEffect, useState } from 'react';
import './App.css'
import { Input, FilmType, FilmsList } from './components';
import { fetcher } from './utils';
import useSWR from 'swr';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [films, setFilms] = useState<FilmType[]>([]);
  const { data, isLoading, error } = useSWR(`http://www.omdbapi.com/?s=${inputValue}&apikey=${import.meta.env.VITE_API_KEY}`, fetcher);

  useEffect(() => {
    setFilms(data?.Search)
  }, [inputValue])

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

  if (error) return "An error occurred";
  return (
    <div> 
      <h1>Film search</h1>
      <Input value={inputValue} onInputChange={onChangeHandle}/>
      {isLoading ? <div>"Loading..."</div> : <FilmsList films={films}/>}
    </div>
  )
}

export default App;
