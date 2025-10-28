import React, { useEffect, useState, useRef} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice';

function AddTodo({updateText, setUpdateText}) {

    const inputRef = useRef();
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        console.log(`entered1`)
        e.preventDefault();
        dispatch(addTodo(input))
        setInput("")
    }
    
    const handleUpdate = (e) => {
        console.log(`entered2`)
        e.preventDefault();
        dispatch(updateTodo({id: updateText.id, text: input}))
        setUpdateText({})
        setInput("")
    }

    useEffect(() => {
        if(updateText.edit){
            inputRef.current.value = updateText.text;
            setInput(updateText.text);
            updateText.edit = false;
        }
        console.log(`updated`);
    }, [updateText])

  return (
    <>
        <input type="text" placeholder='Enter a todo' value={input} onChange={(e) => setInput(e.target.value)} ref={inputRef}/>
        {updateText.id ? (<button onClick={handleUpdate}>Update</button>):(<button onClick={handleSubmit}>Add a Todo</button>)}
    </>
  )
}

export default AddTodo