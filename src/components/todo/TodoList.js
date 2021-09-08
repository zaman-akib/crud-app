import React, {useContext} from 'react'
import ToDo from './Todo'
import ToDoForm from './TodoForm'
import { GlobalContext } from '../../context/GlobalState'

function ToDoList() {

    const { addTodo } = useContext(GlobalContext)

    return (
        <React.Fragment>
            <ToDoForm onSubmit={addTodo}/>
            <ToDo />
        </React.Fragment>
    )
}

export default ToDoList
