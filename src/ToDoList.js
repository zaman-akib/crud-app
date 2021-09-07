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

    const updateTodo = (id, newValues) => {
        setTodos(prev => prev.map(item => (item.id === id ? newValues : item)))
    }

    const deleteToDo = id => {
        const delToDo = todos.filter(todo => todo.id !== id)
        setTodos(delToDo)
    }

    return (
        <React.Fragment>
            <ToDoForm onSubmit={addToDo} />
            <ToDo 
                todos={todos} 
                updateTodo={updateTodo} 
                deleteToDo={deleteToDo}
            />
        </React.Fragment>
    )
}

export default ToDoList
