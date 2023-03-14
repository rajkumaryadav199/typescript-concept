// import { count } from 'console';
import React, { useState } from 'react'
import Button from './Button'
import Count from './Count'

const Counter = () => {
    const [data, setData]=useState<number>(0);

    const handleChange=(value:number)=>{
       setData(data + value)
    }
  return (
    <div>
       <Count count={data} />
       <Button  lable="ADD" onClick={()=>handleChange(1)} />
       <Button lable="SUB" onClick={()=>handleChange(-1)} />
    </div>
  )
}

export default Counter
