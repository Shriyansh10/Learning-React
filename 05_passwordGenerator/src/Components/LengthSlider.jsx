import React from "react";


function LengthSlider({length, setLength}) {

  return (
    <>
      <div className="flex flex-row gap-5">
        <input className="mx-10 w-40" type="range" name="" id="length" max="20" min="8" value={length} onChange={(e)=>{setLength(e.target.value)}}/>
        <div className="w-auto ">Length:{length}</div>
      </div>
    </>
  );
}

export default LengthSlider;
