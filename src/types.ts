 export interface TOdO{

    id:number,
    text:string,
    
}
export interface AddToDoProps{
    addToDo: (title:string) =>void;
}
export interface TodoListProps{
    todos:TOdO[],
    deleteTodo:DeleteTodo;
}

export type DeleteTodo=(id:number)=>void;


 