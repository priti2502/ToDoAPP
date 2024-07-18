import { useState } from 'react';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';
import { TOdO,  DeleteTodo } from './types';
import './App.css';

function App() {
const [todos,setTodos]=useState<TOdO[]>([]);

const addTodo=(title:string)=>{

const userTodo:TOdO={
  id:todos.length+1,
  text:title,
};
setTodos([...todos,userTodo]);
}

 const deleteTodo: DeleteTodo =(id)=>{
 const updatedTodos=todos.filter(todo=>todo.id!==id);
 setTodos(updatedTodos);
}

 


  return (
    <div className="container">
    <h1>TODO APP</h1>
    <AddToDo addToDo={addTodo} />
    <div className="todo-list">
      <ToDoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  </div>
  )
}

export default App