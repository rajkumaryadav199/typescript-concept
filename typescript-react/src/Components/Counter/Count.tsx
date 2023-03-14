import React from 'react'

interface ICountProps{
    count:number
}
const Count = ({count}:ICountProps) => {
  return (
    <h1>{count}
      
    </h1>
  )
}

export default Count
