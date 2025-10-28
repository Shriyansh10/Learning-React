import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import { useState } from 'react'

function App() {

    const [updateText, setUpdateText] = useState({})

  return (
    <>
      <h1>Redux Toolkit</h1>
      <AddTodo updateText={updateText} setUpdateText={setUpdateText} />
      <Todo updateText={updateText} setUpdateText={setUpdateText} />
    </>
  )
}

export default App
