import React from "react"
import "./Todo.css"

const Todo = ({task}) => {
    return (
        <div className="Todo">
            <p className="task">{task}</p>
            <button className="done-button">Done</button>
            <button className="remove-button">Remove</button>
        </div>
    )
}

export default Todo

