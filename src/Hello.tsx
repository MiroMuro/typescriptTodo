import React, {useState, ChangeEvent} from 'react';

interface TodoList {
    desc: string,
    date: string,
    priority: string
}

function TodoForm() {
    const [values, setValues] = useState<TodoList>({} as TodoList);
    //const [values, setValues] = useState<TodoList[]>([]);
    const [test, setTest] = useState<TodoList[]>([]);

    const inputChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [event.target.id]: event.target.value});
    }

    const addTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const newTask = {desc: values.desc, date: values.date, priority: values.priority}
        setTest([...test, newTask]);
        console.log(test);
        setValues({desc: '', date: '', priority: ''});
        }

    return (
        <div>
            <input type="text" id="desc" value={values.desc} placeholder="Description" onChange={inputChanged}/>
            <input type="text" id="date" value={values.date} placeholder="Date" onChange={inputChanged}/>
            <input type="text" id="priority" value={values.priority} placeholder="Priority" onChange={inputChanged}/>
            <button onClick={addTodo}>Add</button>
        </div>
    )
}

export default TodoForm;