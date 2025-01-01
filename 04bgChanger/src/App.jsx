import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
            <button 
            onClick={() => setColor("red")}
            className="outline-none px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
            <button 
            onClick={() => setColor("green")}
            className="outline-none px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
            <button 
            onClick={() => setColor("blue")}
            className="outline-none px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
            <button 
            onClick={() => setColor("olive")}
            className="outline-none px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor: "olive"}}>Olive</button>
            <button 
            onClick={() => setColor("orange")}
            className="outline-none px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor: "orange"}}>Orange</button>
            <button 
            onClick={() => setColor("white")}
            className="outline-none px-4 rounded-full py-1 text-black shadow-xl" style={{backgroundColor: "white"}}>White</button>
            <button 
            onClick={() => setColor("black")}
            className="outline-none px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor: "Black"}}>Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App