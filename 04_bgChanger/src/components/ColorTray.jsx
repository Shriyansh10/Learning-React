import React from "react";
import Color from './Color'

function ColorTray({setColor}){

    // const [color, setColor] = useState("bg-slate-500")

    // const handleColorChange = (e) => {
    //     if(e.target.classList.contains("color")){
    //         document.querySelector(".change-color").style.backgroundColor = e.target.style.backgroundColor;
    //     }
    // }

    return (
        <div className="bg-white w-3/4 h-20 absolute bottom-10 left-10 right-10 flex place-self-center-safe justify-around items-center rounded-lg">
            <Color color="blue" setColor = {setColor}/>
            <Color color="green" setColor = {setColor}/>
            <Color color="rose" setColor = {setColor}/>
            <Color color="amber" setColor = {setColor}/>
            <Color color="slate" setColor = {setColor}/>
            <Color color="cyan" setColor = {setColor}/>
            <Color color="violet" setColor = {setColor}/>
        </div>
    )
}

export default ColorTray;