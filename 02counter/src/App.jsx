import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)
  function increasehandler(){
    if(counter<20){
      setCounter(counter+1)
      console.log(counter);
      setCounter(counter+1)
      setCounter(counter+1)
    }
  }
  function decreasehandler(){
    if(counter>0){
      setCounter(counter-1)
    }

  }

  return (
    <>      
    <h1>Chai with Shriyansh</h1>
    <button onClick={decreasehandler}>-</button>
    <span>counter : {counter}</span>
    <button onClick={increasehandler}>+</button>
    </>
  )
}

export default App
