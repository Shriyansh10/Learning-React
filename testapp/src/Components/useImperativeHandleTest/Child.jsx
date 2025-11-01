import React from 'react'
import Input from './Input'
import { useRef } from 'react'
import { useState } from 'react';

function Child() {

    const buttonRef = useRef();

    useState(() => {
        // buttonRef.current.inputRef.value= 'Populated from Parent'
    },[])

  return (
    <>
        <Input ref={buttonRef}/>
        <button onClick={() => {buttonRef.current.inputRef1.current.value = 'Populated inputRef1 from parent'}}>Click</button>
        <button onClick={() => {buttonRef.current.inputRef2.current.value = 'Populated inputRef2 from parent'}}>Click</button>
    </>
  )
}

export default Child