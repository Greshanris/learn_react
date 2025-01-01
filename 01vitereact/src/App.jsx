import Chai from "./Chai"

function App() {
  const username = "Rishav Chaudhary"
  
  return (
    // Fragment <></>, alternatively we can use React.Fragment
    <>
      <Chai />
      {/* Here, {username}, we can only write evaluative expression, not the javascript expressions
      like: if..else, or function or for. Anything that needs to be calculated.
      What we are writing is only the final outcome. All declaration such as function, or variable or
      usage of loop are all done before return statement in .jsx */}
      <h1>chai aur react | {username}</h1>
      <p>test paragraph</p>
    </>
  );
}

export default App;
