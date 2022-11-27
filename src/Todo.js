import React, {useState} from "react"
import "./Todo.css"

const Todo = ({task, remove}) => {
    const [active, setActive] = useState(false);
    const ToggleClass = () => {
        setActive(!active)
    }
    return (
        <div className="Todo">
            <p className={!active ? "done" : ""}>{task}</p>
            <button onClick={ToggleClass}>Done</button>
            <button onClick={() => remove(task)}className="remove-button">Remove</button>
        </div>
    )
}

export default Todo

