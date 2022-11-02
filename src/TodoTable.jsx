function TodoTable(props) {

    return (
        <div>
            <table>
                <tbody>
                    {props.todos.map((value, index) =>
                        <tr key={index}>
                            <td>{value.description}</td>
                            <td>{value.date}</td>
                            <td>{value.priority}</td>
                            <td><button onClick={()=>props.poistaTodo(index)} >Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TodoTable;