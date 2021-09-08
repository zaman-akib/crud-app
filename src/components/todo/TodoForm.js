import React, { useState } from 'react'

function ToDoForm({edit, onSubmit}) { 
    const [id, setId] = useState(1)

    const [inputs, setInputs] = useState(edit ? {
        name: edit.name,
        email: edit.email,
        todo: edit.todo,
    } : {
        name:'',
        email:'',
        todo:'',
    })

    const handleChange = e => {
        const {name, value} = e.target
        setInputs({
            ...inputs,
            [name]: value,
        })
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        setId(id + 1)

        const {name, email, todo} = inputs
        onSubmit({
            id: id,
            name,
            email,
            todo,
        })

        setInputs({
            name:'',
            email:'',
            todo:'',
        })
    }

    return (
        <React.Fragment>
            <form className="flex flex-col justify-between p-2" onSubmit={handleSubmit}>
                {
                    edit ? (
                        <>
                            <input className="p-3 border rounded-lg mb-3" type="text" placeholder="Edit Name" 
                                onChange={handleChange} value={inputs.name} name="name" required></input>
                            <input className="p-3 border rounded-lg mb-3" type="email" placeholder="Edit Email" 
                                onChange={handleChange} value={inputs.email} name="email" required></input>
                            <textarea className="p-3 border rounded-lg mb-3" type="text" placeholder="Edit ToDo" 
                                onChange={handleChange} value={inputs.todo} name="todo" required></textarea>
                            <button className="bg-green-200 mx-auto rounded-lg p-2 px-4 text-xl mb-3">Update To-Do</button>
                        </>
                    ) : (
                        <>
                            <input className="p-3 border rounded-lg mb-3" type="text" placeholder="Enter Name" 
                                onChange={handleChange} value={inputs.name} name="name" required></input>
                            <input className="p-3 border rounded-lg mb-3" type="email" placeholder="Enter Email" 
                                onChange={handleChange} value={inputs.email} name="email" required></input>
                            <textarea className="p-3 border rounded-lg mb-3" type="text" placeholder="Enter Todo" 
                                onChange={handleChange} value={inputs.todo} name="todo" required></textarea>
                            <button className="bg-green-200 mx-auto rounded-lg p-2 px-4 text-xl mb-3">Assign New To-Do</button>
                        </>
                    )
                }
            </form>
        </React.Fragment>
    )
}

export default ToDoForm;