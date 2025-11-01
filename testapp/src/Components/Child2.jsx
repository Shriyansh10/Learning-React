import React from 'react'
import GrandChild2 from './GrandChild2'
import { useRef } from 'react'

function Child2() {
    const inputRef = useRef();

    

  return (
    <div style={{backgroundColor: 'cyan'}}>
        <h1 >Child 2</h1>
        <button onClick={() => sayhello('Shriyansh')}>Click</button>
        <GrandChild2 /></div>
  )
}

export default Child2