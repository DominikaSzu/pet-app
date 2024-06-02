import { ChangeEvent, useState } from 'react';
import './App.css'
import { Input, FilmsList } from './components';
import { fetcher } from './utils';
import useSWR from 'swr';

function App() {
  const [inputValue, setInputValue] = useState("");
  const { data, isLoading, error } = useSWR(`http://www.omdbapi.com/?s=${inputValue}&apikey=${import.meta.env.VITE_API_KEY}`, fetcher);

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

  if (error) return "An error occurred";
  return (
    <div> 
      <h1>Film search</h1>
      <Input value={inputValue} onInputChange={onChangeHandle}/>
      {isLoading ? <div>"Loading..."</div> : <FilmsList films={data.Search}/>}
    </div>
  )
}

export default App;
