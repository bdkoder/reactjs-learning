import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('olive');

  return (
    <>
     <div className="w-full h-screen duration-200"
     style={{backgroundColor: bgColor}}
     >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        onClick = {()=>setBgColor('red')}
        style={{backgroundColor: 'red'}}
        >Red</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        onClick = {()=>setBgColor('green')}
        style={{backgroundColor: 'green'}}
        >Green</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        onClick = {()=>setBgColor('blue')}
        style={{backgroundColor: 'blue'}}
        >Blue</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => setBgColor('orange')}
        style={{backgroundColor: 'orange'}}
        >Orange</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
