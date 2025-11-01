import React, { useId, useImperativeHandle, useRef } from "react";

function Select({ options, label, className = "", ...props }, ref) {
  const id = useId();
  const selectRef = useRef();

  useImperativeHandle(ref, ()=>{return(
    {selectRef}
  )}, [])

  return (
    <div>
      {label && <label htmlFor={id}></label>}
      <select name="" id={id} {...props} ref={selectRef} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
        {options &&
          options.map((option) => {
            return (
              <option
                value={option}
                key={option}
              >
                {option}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
