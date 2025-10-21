import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return (
//     <>
//     <h1>Main.jsx function</h1>
//     </>
//   )
// }

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// } => This will not work as react expects proper parameters inside a function or it requires a html element which it will parse according to its function

const testVariable = `hello`
const reactElement = React.createElement(
  'a', {href: "https://google.com", target: "_blank"},
  `Visit Google`,
  testVariable
)

const MyApp2 =
  (
    <>
    <h1>Main.jsx function</h1>
    </>
  )


createRoot(document.getElementById('root')).render(
  
  // <MyApp/> => executes
  // MyApp() // => executes
  // MyApp2
  reactElement
  // <App/> 
)
