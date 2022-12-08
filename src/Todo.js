import React, {useState} from "react"
import "./Todo.css"

const Todo = ({task, remove}) => {
    const [active, setActive] = useState(true);
    return (
        <div className="Todo">
            <p className={!active ? "done" : ""}>{task.task}</p>
            <button onClick={() => setActive(!active)}>Done</button>
            <button onClick={() => remove(task)}className="remove-button">Remove</button>
        </div>
    )
}

export default Todo

