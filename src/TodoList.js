import React, {useState} from "react"
import Todo from "./Todo"
import InputForm from "./InputForm"
import "./TodoList.css"


const TodoList = () => {

const [list, setList] = useState(["mow the lawn", "buy groceries", "get a car wash"]);

const remove = (task) => {
    setList(list => {
        return [...list].filter(item => item !== task)   
    })
}

    return (
        <>
        <h1 id="todo-header">To do list</h1>
        <InputForm />
        {list.map(item => <Todo task={item} remove={remove}/>)}
        </>
    )
}



export default TodoList