import ColorTray from './components/ColorTray'
import React, {useState} from 'react'

function App() {

  const [Color, setColor] = useState('bg-slate-500')

  return (
    <>  
    <div className={`${Color} change-color w-screen h-screen`}>
      <ColorTray setColor = {setColor}/>
    </div>
    </>
  )
}

export default App
