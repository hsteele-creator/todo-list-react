import React from "react"
import "./InputForm.css"
import {useState} from "react"

const InputForm = ({addTask}) => {
    const [task, setTask] = useState({task: "", date: ""});

    // const add = (e) => {
    //     e.preventDefault();
    //     console.log(e.target)
    //     addTask(e.target.value)
    // }
    return (
    <>
    <form id="input-form" onSubmit={(e) => {
        e.preventDefault();
        addTask(task)
        console.log(e.target);
        console.log(task)
    }}>
        <input onChange={(e) => setTask({task : e.target.value, date: new Date()})} type="text" id="input" name="task" value={task.task}></input>
        <input type="submit" id="submit" value="AddTask"></input>
    </form>


    </>
    )
}

export default InputForm