import React, {useState} from "react"
import Todo from "./Todo"

const TodoList = () => {

const [list, setList] = useState(["mow the lawn", "buy groceries", "get a car wash"]);

const remove = (task) => {
    setList(list => {
        return [...list].filter(item => item !== task)   
    })
}

    return (
        list.map(item => <Todo task={item} remove={remove}/>)
    )
}



export default TodoList