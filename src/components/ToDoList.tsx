import React from 'react'
import { TodoListProps } from '../types'

const ToDoList:React.FC<TodoListProps> = ({todos,deleteTodo}) => {
  return (
    <ul>
      
      {todos.map(todo=>
      
      <div style={{display:'flex'}} key={todo.id}>
      <li>{todo.text}</li>
      <button type='button' style={{marginLeft:'1rem', width:'70px', height:'25px'}} onClick={()=>deleteTodo(todo.id)}>Delete</button>
      </div>
      )}
    </ul>
  )
}

export default ToDoList
