import { constants } from 'os'
import React, { useState } from 'react'

interface IInputProps{
    /* haandle */
    onClick:(value:string)=>void
}

const TodoInput = ({onClick}:IInputProps) => {
    const[state, setState]=useState<string>("")

    const handleChange:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
     
         setState(e.target.value)
    }


      const handleClick:React.MouseEventHandler<HTMLButtonElement >=()=>{
             onClick(state)
             setState("")
      }
    
  return (
    <div>
      <input
      placeholder='write something....' 
      onChange={handleChange}/>

      <button onClick={handleClick}>ADD INPUT

      </button>
    </div>
  )
}

export default TodoInput
