import React, {useCallback} from "react";

function Copy({passwordRef, password}) {

    const handleCopyToClipboard = useCallback(() =>{
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, password.length);
        window.navigator.clipboard.writeText(password)
    }, [password])

  return (
    <div className="w-2/10 h-20 bg-white ml-15 mt-20 rounded-2xl flex items-center justify-center text-4xl" onClick={handleCopyToClipboard}>
      Copy
    </div>
  );
}

export default Copy;
