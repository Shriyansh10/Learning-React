
import './App.css'
import Child1 from './Components/Child1'
import Child2 from './Components/Child2'
import Child from './Components/useImperativeHandleTest/Child'

function App() {

  return (
    <div style={{backgroundColor: 'grey'}}>
    <h1>Parent Component</h1>
    <div > 
      {/* <Child1/> */}
      {/* <Child2/> */}
      <Child/>
    </div>
    </div>
  )
}

export default App
