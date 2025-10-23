import React from "react";

function NumberCheckbox({setNumberChecked}) {
  return (
    <>
      <div className="flex flex-row gap-5 ">
        <input className="w-5" type="checkbox" name="" id="numbers" onChange={(e) => {
            e.target.checked ? setNumberChecked(true) : setNumberChecked(false);
            }}/>
        <label htmlFor="numbers">Numbers</label>
      </div>
    </>
  );
}

export default NumberCheckbox;
