import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialAllowed, setSpecialAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) {
      str += '0123456789';
    }

    if (specialAllowed) {
      str += '!@#$%^&*()_+';
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, specialAllowed, setPassword]);


  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 4);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, specialAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-700">
        <h1 className="text-2xl text-center font-bold mb-4">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={password}
            className='w-full px-4 py-2 text-gray-700 focus:outline-none'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick = {copyPasswordToClipBoard}
          className="bg-blue-700 hover:bg-gray-700 text-white px-4 py-2 focus:outline-none">Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            id="numbers"
              type="checkbox"
              checked={numberAllowed}
              onChange={(e) => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor='numbers'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              id = "special"
              type="checkbox"
              checked={specialAllowed}
              onChange={(e) => setSpecialAllowed((prev) => !prev)}
            />
            <label htmlFor='special'>Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
