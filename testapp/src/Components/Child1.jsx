import React, { useRef, useEffect } from 'react'
import GrandChild1 from './GrandChild1'
import { useState } from 'react';

function Child1() {
  const inputRef = useRef();
  const parentRef = useRef();
  const [status, setStatus] = useState(false);
      const [text, setText] = useState('')
  

    // useEffect(() => {
    //   inputRef.current?.inputFocus()
    
    // })
    

  return (
    <div style={{backgroundColor: 'cyan'}}>
        
        <h1 >Child 2 {inputRef.current?.showValue()} {console.log(inputRef.current?.showValue())}</h1>
        <input type="text" name="" id="" value={text}  onChange={(e) => setText(e.target.value)} ref={parentRef}/>

        <button onClick={()=>{setStatus((prev)=> !prev)
            inputRef.current.value;
        }}>Click ME</button>
        <GrandChild1  parRef={parentRef} ref={inputRef}/></div>

  )
}

export default Child1