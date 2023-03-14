import React,{useState} from 'react'
import TodoInput from './TodoInput'

interface ITodoItem{
    title:string,
    id:number,
    status:boolean
}


const TodoItem = () => {

    const [data, setDate]=useState<ITodoItem[]>([])

    const handleAdd=( title:string )=>{
       const payload:ITodoItem={
         title,
         id:data.length+1,
         status:false
       } 
       setDate([...data, payload])
    }
  return (
    <div>
        <TodoInput onClick={handleAdd} />
        {
            data.map((task)=><h2 key={task.id}>{task.title}</h2>)
        }
    </div>
  )
}

export default TodoItem
