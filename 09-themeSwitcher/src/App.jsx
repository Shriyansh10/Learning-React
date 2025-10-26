import {useState, useEffect} from 'react'
import "./App.css";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {

  const [theme, setTheme] = useState('light');

  const lighttheme = () =>{
    setTheme('light')
  }

  const darktheme = () =>{
    setTheme('dark')
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark")
    document.querySelector("html").classList.add(theme)
  }, [theme])
  

  return (
    <>
    <ThemeContextProvider value={{theme, lighttheme, darktheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
    </>
  );
}

export default App;
