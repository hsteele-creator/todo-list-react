import React, {useState} from "react"
import Todo from "./Todo"

const TodoList = () => {

const [list, setList] = useState(["mow the lawn", "buy groceries", "get a car wash"]);

const remove = (list) => {
    setList()
}

    return (
        list.map(item => <Todo task={item}/>)
    )
}



export default TodoList