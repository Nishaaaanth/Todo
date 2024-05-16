export function Todos(props) {
    return (
        <div>
            <div>
                {props.todo.map(function(task, index) {
                    return (
                        <div key={index}>
                            <div>{task.title}</div>
                            <div>{task.description}</div>
                            <button>{task.completed ? "Completed" : "Not Completed"}</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
