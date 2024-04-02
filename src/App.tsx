import { useEffect, useState } from 'react'
import './App.css'
import { Input } from './components';
import axios from 'axios';

type Film = {
  title: string;
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const [films, setFilms] = useState<Film[]>([])

  const fetchFilms = async () => {
    try {
      const response = await axios(`http://www.omdbapi.com/?t=${inputValue}`);
      setFilms(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFilms()
  }, [inputValue])

  return (
    <div>
      <h1>Film search</h1>
      <Input value={inputValue} onInputChange={(e) => setInputValue(e.target.value)}/>
      {films.length > 0 ? films.map(film => (
        <h2>
          {film.title}
        </h2>
      )) : null}
    </div>
  )
}

export default App
