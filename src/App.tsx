import { useState } from 'react'
import './App.css'

function App() {
  const [films, setFilms] = useState("");

  return (
    <div>
      <h1>Film search</h1>
      <label id="film_search">
        <input type="text" name="film_search" value={films} onChange={e => setFilms(e.target.value)}/>
      </label>
    </div>
  )
}

export default App
