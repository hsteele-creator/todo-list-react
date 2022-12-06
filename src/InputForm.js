import React from "react"
import "./InputForm.css"

const InputForm = () => {
    return (
    <>
    <form id="input-form">
        <input type="text" id="input"></input>
        <input type="submit" id="submit" value="AddTask"></input>
    </form>
    </>
    )
}

export default InputForm