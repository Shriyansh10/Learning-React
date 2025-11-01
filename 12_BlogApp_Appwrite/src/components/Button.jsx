import React, { useImperativeHandle } from 'react'
import { useRef } from 'react'

function Button({
    children,
    type= 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}, ref) {

  const buttonRef = useRef();

  useImperativeHandle(ref, ()=> {
    buttonRef
  })

  return (
    <button type={type} className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...props} ref={buttonRef}>
      {children}
    </button>
  )
}

export default React.forwardRef(Button)