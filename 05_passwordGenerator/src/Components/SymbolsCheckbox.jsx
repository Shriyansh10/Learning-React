import React from "react";

function SymbolsCheckbox({setSymbolChecked}) {
  return (
    <>
      <div className="flex flex-row gap-5">
        <input className="w-5" type="checkbox" name="" id="symbols" onChange={(e)=>{
            e.target.checked ? setSymbolChecked(true):setSymbolChecked(false);
        }}/>
        <label htmlFor="symbols">Symbols</label>
      </div>
    </>
  );
}

export default SymbolsCheckbox;
