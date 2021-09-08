import React, { useState, useContext } from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { FaRegEdit } from 'react-icons/fa'
import ToDoForm from './TodoForm'
import { GlobalContext } from '../../context/GlobalState'

function ToDoList() {
    const { todos, updateTodo, deleteTodo } = useContext(GlobalContext)

    const [edit, setEdit] = useState({
        id: null,
        name: '',
        email: '',
        todo:'',
    })

    const submitUpdate = updatedTodo => {
        const {id} = edit
        updatedTodo.id = id
        updateTodo(id, updatedTodo)
        setEdit({
            id: null,
            name: '',
            email: '',
            todo:'',
        })
    }

    if(edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitUpdate}/>
    }

    return (
        <React.Fragment>
            {
                todos.length !== 0 ? todos.map(({id, name, email, todo}) => (
                    <div key={id} className="flex flex-col border-1 rounded-lg overflow-hidden m-1">
                        <div className="flex flex-col p-1 px-2 bg-gray-200">
                            <div className="flex flex-row justify-between">
                                <div className="text-lg">Name: {name}</div>
                                <div className="flex flex-row space-x-2">         
                                    <FaRegEdit 
                                    className="cursor-pointer"
                                    onClick={() => setEdit({
                                        id,
                                        name,
                                        email,
                                        todo,
                                    })}
                                    />
                                    <RiDeleteBinLine 
                                    className="cursor-pointer" 
                                    onClick={() => deleteTodo(id)}
                                    />
                                </div>
                            </div>
                            <div className="text-sm">Email: {email}</div>
                        </div>
                        <div className="bg-blue-200 overflow-hidden p-1 px-2">
                            <div>To-do: {todo}</div>
                        </div>
                    </div>
                )) : <div className="p-1 px-2">No To-dos found</div>
            }
        </React.Fragment>
    )
}

export default ToDoList
