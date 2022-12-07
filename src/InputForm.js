import React from "react"
import "./InputForm.css"

const InputForm = ({addTask}) => {
    const add = (e) => {
        e.preventDefault();
        addTask(e.target.value)
    }
    return (
    <>
    <form id="input-form">
        <input type="text" id="input"></input>
        <input onClick={add} type="submit" id="submit" value="AddTask"></input>
    </form>
    </>
    )
}

export default InputForm