import { useState } from 'react'
import './App.css'
import { Input } from './components';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1>Film search</h1>
      <Input value={inputValue} onInputChange={(e) => setInputValue(e.target.value)}/>
    </div>
  )
}

export default App
