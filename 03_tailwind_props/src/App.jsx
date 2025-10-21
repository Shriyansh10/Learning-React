// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Card from './Card'

function App() {
  // const [count, setCount] = useState(0);
  let arr = [1,2,3];
  let obj= {
    name: "second"
  }
  

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-10">
        Chai with Shriyansh
      </h1>
      <Card channel="Chai with Shriyansh" arr = {arr}/>
      <Card channel={`Chai with Hitesh`} arr = {obj}/>
    </>
  );
}

export default App;
