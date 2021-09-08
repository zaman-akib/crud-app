import React, {useContext} from 'react'
import ToDoList from './TodoList'
import ToDoForm from './TodoForm'
import { GlobalContext } from '../../context/GlobalState'

function ToDoMain() {

    const { addTodo } = useContext(GlobalContext)

    return (
        <React.Fragment>
            <ToDoForm onSubmit={addTodo}/>
            <ToDoList />
        </React.Fragment>
    )
}

export default ToDoMain
