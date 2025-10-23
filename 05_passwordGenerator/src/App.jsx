import React, { useState , useRef} from "react";
import Copy from "./Components/Copy";
import LengthSlider from "./Components/LengthSlider";
import NumberCheckbox from "./Components/NumberCheckbox";
import Textbox from './Components/Textbox';
import SymbolsCheckbox from "./Components/SymbolsCheckbox";


function App() {

  const [length, setLength] = useState(8)
  const [numberChecked, setNumberChecked] = useState(false);
  const [symbolChecked, setSymbolChecked] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  return (
    <>
      <div className="h-screen w-screen overflow-hidden">
        <div className="bg-emerald-900 mx-auto mt-30 w-7/10 h-4/10 rounded-3xl box-border">
          <div className="flex flex-row">
            <Textbox length={length} numberChecked={numberChecked} symbolChecked={symbolChecked} password={password} setPassword={setPassword} passwordRef = {passwordRef}/>
            <Copy passwordRef ={passwordRef} password={password}/>
          </div>
          <div className="flex flex-row justify-evenly mt-15 mx-10 text-white text-3xl">
            <LengthSlider  length={length} setLength={setLength}/>
            <NumberCheckbox numberChecked={numberChecked} setNumberChecked={setNumberChecked} />
            <SymbolsCheckbox symbolChecked = {symbolChecked} setSymbolChecked = {setSymbolChecked} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
