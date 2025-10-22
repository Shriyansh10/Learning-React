import React from 'react'
import colorMap from '../utils/colorMap'

function Color({color, setColor}) {
    // const colorMap = {
    //     blue: "bg-blue-500",
    //     green: "bg-green-500",
    //     rose: "bg-rose-500",
    //     amber: "bg-amber-400",
    //     slate: "bg-slate-700",
    //     cyan : "bg-cyan-400",
    //     violet: "bg-violet-500",
    // }
    function handleChangeColor(){
      setColor(colorMap[color])
    }
  return (
    <div className={`${colorMap[color]} color w-1/10 h-10 right-10 flex justify-around items-center rounded-lg`} onClick={handleChangeColor}>
        {color}
    </div>
  )
}

export default Color    