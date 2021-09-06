import React, { useState } from 'react'
import './index.css'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'

function ToDoList() {
    const [todos, setTodos] = useState([])

    const addToDo = todo => {
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }

    return (
        <React.Fragment>
            <ToDoForm onSubmit={addToDo} />
            <ToDo todos={todos}/>
        </React.Fragment>
    )
}

export default ToDoList
