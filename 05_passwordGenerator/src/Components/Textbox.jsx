import React, { useCallback, useEffect} from "react";

const Textbox = ({length, numberChecked, symbolChecked, password, setPassword, passwordRef}) => {

    const passwordGenerator = useCallback(()=>{
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numberChecked) str += "1234567890";
        if(symbolChecked) str +="+=-)(*&^%$#@!"
        let newPassword = "";
        for(let i=0;i<length;i++){
            newPassword += str[Math.floor(Math.random()*(str.length))]
        }
        setPassword(newPassword)
        console.log(newPassword);
    }, [length, numberChecked, symbolChecked, setPassword])
    
    useEffect(()=>{passwordGenerator()}, [length, numberChecked, symbolChecked])
    
    return (
    <>
      <input
        className="w-5/10 h-20 bg-white ml-40 mt-20 rounded-2xl text-4xl"
        type="text"
        name=""
        id="passwordGenerated"
        readOnly
        value={password} 
        ref = {passwordRef}
      />
    </>
  );
}

export default Textbox;
