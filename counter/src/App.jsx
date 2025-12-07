import { useState } from "react";
import "./App.css";
import Button from "../components/Button.jsx";


function App() {
 const [count,setCount]=useState(0);
  function increment(){
    setCount(count+1)
  }
  function decrement(){
    setCount(count-1)
  }
  function reset(){
    setCount(0)
  }
  return (
    <>
    <Button text="INCREMENT" func={increment}/>
    <Button text="DECREMENT" func={decrement}/>
    <Button text="RESET" func={reset}/>
   <h2 style={{color:"green"}}>Count: {count}</h2>
    </>
  );
}

export default App;
