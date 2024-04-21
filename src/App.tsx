import { useEffect, useState } from 'react'
import './App.css'
import { Input } from './components';

type Film = {
  title: string;
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const [films, setFilms] = useState<Film[]>([])



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
