function TodoTable(props) {

    return (
        <div>
            <table>
                <tbody>
                    {props.todos.map((value, index) =>
                        <tr key={index}>
                            <td>{value.desc}</td>
                            <td>{value.date}</td>
                            <td>{value.priority}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TodoTable;