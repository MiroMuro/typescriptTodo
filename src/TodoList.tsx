import React, {useState, ChangeEvent} from 'react';
import TodoTable from './TodoTable';
import {TodoList} from './interfaces'


function TodoForm() {
    const [todo, setTodo] = useState<TodoList>({description: '', date: '', priority: ''} as TodoList);
    const [todos, setTodos] = useState<TodoList[]>([]);

    const inputChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setTodo({...todo, [event.target.id]: event.target.value});
    }

    const addTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const newTask = {description: todo.description, date: todo.date, priority: todo.priority}
        setTodos([...todos, newTask]);
        //console.log(todos);
        setTodo({description: '', date: '', priority: ''});
        }

     // todo poistofunktio
    const deleteTodo =(index:number) =>{
            console.log(index)
            setTodos(todos =>{
                return todos.filter((todo, i) => i !== index)
                });
    }

   

    return (
        <div>
            <fieldset>
            <legend>Add todo:</legend>
            <input type="text" id="description" value={todo.description} placeholder="Description" onChange={inputChanged}/>
            <input type="text" id="date" value={todo.date} placeholder="Date" onChange={inputChanged}/>
            <input type="text" id="priority" value={todo.priority} placeholder="Priority" onChange={inputChanged}/>
            <button onClick={addTodo}>Add</button>
            </fieldset>
            <TodoTable poistaTodo={deleteTodo} todos={todos}/>
            
        </div>
    )
}

export default TodoForm;