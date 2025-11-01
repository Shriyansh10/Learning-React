import React, { useRef, useId, useImperativeHandle } from 'react';

function Input({
    label,
    type='text',
    className='',
    ...props
}, ref) {

    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const id = useId()

    useImperativeHandle(ref, () => {
        return ({
            inputRef1: inputRef1,
            inputRef2: inputRef2,
        })
    }, [])


  return (
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label>}
        <input type={type} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-200 w-full ${className} `} {...props} ref={inputRef1}/>
        <input type={type} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-200 w-full ${className} `} {...props} ref={inputRef2}/>
    </div>
  )
}

export default React.forwardRef(Input)