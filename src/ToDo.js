import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { FaRegEdit } from 'react-icons/fa'

function ToDo({todos}) {

    return (
        <React.Fragment>
            {
                todos.length !== 0 ? todos.map(todo => (
                    <div key={todo.id} className="flex flex-col border-1 rounded-lg overflow-hidden m-1">
                        <div className="flex flex-col p-1 px-2 bg-gray-200">
                            <div className="flex flex-row justify-between">
                                <div className="text-lg">Name: {todo.name}</div>
                                <div className="flex flex-row space-x-2">         
                                    <FaRegEdit />
                                    <RiDeleteBinLine />
                                </div>
                            </div>
                            <div className="text-sm">Email: {todo.email}</div>
                        </div>
                        <div className="bg-blue-200 overflow-hidden p-1 px-2">
                            <div>To-do: {todo.todo}</div>
                        </div>
                    </div>
                )) : <div>No To-dos found</div>
            }
        </React.Fragment>
    )
}

export default ToDo
