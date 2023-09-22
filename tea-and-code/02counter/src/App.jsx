import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Learning ReactJS</h1>
      <h4>Counter Value : {counter}</h4>

      <button
      onClick={addValue}
      >Add Value - {counter}</button>
      <button
      onClick={removeValue}
      >Remove Value - {counter}</button>
    </>
  )
}

export default App
