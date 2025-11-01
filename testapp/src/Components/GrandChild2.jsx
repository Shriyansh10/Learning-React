import React from 'react'
import { useState } from 'react'

const GrandChild2 = ({sayhello}) => {

    // const [text, setText] = useState('')
    // const sayhello = (name) => {
    //     console.log(`hello ${name}`)
    // }
  return (
    <div style={{backgroundColor: 'brown'} }>GrandChild2 
        {/* <input type="text" name="" id="" value={text}  onChange={(e) => setText(e.target.value)} ref={inputRef}/> */}
        {/* <button onClick={() => sayhello('Shriyansh')}>Click</button> */}
    </div>
  )
}

export default GrandChild2