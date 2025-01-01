import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // hooks needs to be learnt and as well as it's usages
  // useState: responsible for change of state. The change is being propogated in dom.
  // from useState, we get two values in variables in the form of arrays:[0th index: counter(variable), 1st index: function(which is mainly termed as setCounter(variablename))]
  let [counter, setCounter] = useState(20)
  // now, we don't need do "let counter"

  // let counter = 25; // although, we can write it the same, and variable will be updated even after using useState, but the change will not propogate to UI.

  const addValue = () => {
    // counter++; // now, counter++ will not update counter, or does not need to be changed, there is already a setCounter;

    // setCounter (()=>{}) , setCounter accepts a callback function, which will give the previous state of counter, and we can use it to update the value of counter.
    // prevCounter(anyname can be given, it's just an argument to be made) gives the existing state(last updated state) of counter
    setCounter(prevCounter => prevCounter + 1); // setCounter(new_value); we can use another name except setCounter();
    // different names like prevCounter on one, and counter one will pose a problem in code readability, so we can use the same name for both.

    setCounter(prevCounter => prevCounter + 1); // interview question: duplicates the value
    setCounter(prevCounter => prevCounter + 1); 
    setCounter(prevCounter => prevCounter + 1); 
    setCounter(prevCounter => prevCounter + 1); // what will be the value of counter, if we call the function:21
    // useState is asynchronous, so it will not update the value of counter immediately, but it will update the value of counter in the next render. (batches update, and same work is being done regularly here)
  }

  const decreaseValue = () => {
    setCounter(counter - 1);
  }
  
  if (counter < 0){
   setCounter(0);
  } else if (counter > 20){
    setCounter(20);
  }

  console.log(counter);
  

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter Value: {counter}</h2>

     <button
     onClick={addValue}>Add Value {counter}</button>
     <br />
     <button
     onClick={decreaseValue}>Decrease Value {counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
