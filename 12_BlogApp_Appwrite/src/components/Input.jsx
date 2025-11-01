import React, { useImperativeHandle } from "react";
import { useRef, useId } from "react";

function Input({ label, type = "text", className = "", ...props }, ref) {
  const inputRef = useRef();
  const id = useId();

  useImperativeHandle(ref, () => {
    return {
      inputRef,
    };
  });

  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-200 w-full ${className} `}
        {...props}
        ref={inputRef}
        id={id}
      />
    </div>
  );
}

export default React.forwardRef(Input);
