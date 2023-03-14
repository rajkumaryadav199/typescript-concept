import React from 'react'

interface IButtonProps{

    /* lable  */
   lable:string
      /* onclick handler */
      onClick:()=>void
}

const Button = ({lable, onClick}:IButtonProps) => {
  return (
    <button onClick={onClick}>
        {lable}
      
    </button>
  )
}

export default Button
