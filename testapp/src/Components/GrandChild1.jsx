import React, { useRef, useState } from 'react'
import { useImperativeHandle } from 'react'

const GrandChild1 = ({parRef, ref}) => {

  const inputRef = useRef();
    const [text, setText] = useState('')
    useImperativeHandle(ref, ()=>({
      // inputFocus: () => ref.current.focus(),
      // changeValue: () => ref.current.value('CHanged from hande')
      showValue: () => inputRef.current?.value,
    }))

  return (
    <div style={{backgroundColor: 'brown'} }>GrandChild1  {parRef?.current?.value} 
        <input type="text" name="" id="" value={text}  onChange={(e) => setText(e.target.value)} ref={inputRef}/>
    </div>
  )
}

export default GrandChild1