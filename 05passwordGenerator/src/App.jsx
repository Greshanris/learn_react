import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // Every time the user changes the Length, numberAllowed, charAllowed, the passwordGenerator function should run, even reloading the page should generate a new password
  // There should be a optimized way to run the passwordGenerator function, and here comes the React Documentation on Hooks
  // Let's see the useCallback hook: what it does? It returns a memoized version of the callback that only changes if one of the dependencies has changed.
  // It means that the function will only be re-created if one of the dependencies has changed. Yes, it's what we need. But, how did we know that?
  // How to use it?
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()-_+=[]{}~`|;:,.<>?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]) // without setPassword, we can still run the function, but it for optimization, we need to add it. (password can be added but it makes an infinite loop as it is the dependency of the function)

  // This is the part of copying and useRef part on using onclick function for input "text"
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // selects the text in the input field and is for optimization
    passwordRef.current?.setSelectionRange(0, 101)
    window.navigator.clipboard.writeText(password)
  }, [password])

  // passwordGenerator();
  // Earlier, without using useCallback, we were calling the passwordGenerator function here, but it was causing an error in the console "Too many re-renders" as well.
  // Since, we can't call the passwordGenerator function here, due to the error poppin up in console "Too many re-renders", we need to call it in useEffect hook, so will learn about it.

  // "useEffect" is React Hook that lets us synchronize a component with an external system
  // This means that we can run some code in a function that will run after the component has been rendered.
  // It has two arguments, the first one is a "setup" function, and the second one is an array of dependencies.
  // The "setup" function is the code that will run after the component has been rendered.
  // which components we are rendering? The passwordGenerator function, so we will call it in the "setup" function. why?
  // Because we want to run the passwordGenerator function after the component has been rendered.

  useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator]) // runs the function if either of the dependencies has changed

  // Now, comes the copying part, where if we click the button then it should copy the password in input field to the clipboard.
  // How can we do that? There is no link between the button and input field. and how can we get access of the browser's clipboard?
  // There is a Hook for it, "useRef". It returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
  // Basically, it lets us reference a value that is not needed for rendering

  // copying part: useRef hook
  const passwordRef = useRef(null); // we can put default value in it, but we don't need it here

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-900 text-white px-3 pyh-0.5 shrink-0 }'>copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">characters</label>
          </div>
          </div>
        </div>
      </>
      )
}

      export default App
