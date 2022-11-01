import React, {useState, ChangeEvent} from 'react';
import TodoTable from './TodoTable';

interface TodoList {
    desc: string,
    date: string,
    priority: string
}

function TodoForm() {
    const [value, setValues] = useState<TodoList>({desc: '', date: '', priority: ''} as TodoList);
    const [todos, setTodos] = useState<TodoList[]>([]);

    const inputChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setValues({...value, [event.target.id]: event.target.value});
    }

    const addTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const newTask = {desc: value.desc, date: value.date, priority: value.priority}
        setTodos([...todos, newTask]);
        //console.log(todos);
        setValues({desc: '', date: '', priority: ''});
        }

    // todo poistofunktio

    return (
        <div>
            <input type="text" id="desc" value={value.desc} placeholder="Description" onChange={inputChanged}/>
            <input type="text" id="date" value={value.date} placeholder="Date" onChange={inputChanged}/>
            <input type="text" id="priority" value={value.priority} placeholder="Priority" onChange={inputChanged}/>
            <button onClick={addTodo}>Add</button>

            <TodoTable todos={todos}/>
        </div>
    )
}

export default TodoForm;