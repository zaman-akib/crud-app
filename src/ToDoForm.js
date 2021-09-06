import React, { useState } from 'react'

function ToDoForm(props) {
    const [id, setId] = useState(0)
    const [inputs, setInputs] = useState(
        {
            name:'',
            email:'',
            todo:'',
        }
    )

    const handleChange = e => {
        setInputs(
            {
                ...inputs,
                [e.target.name]: e.target.value,
            }
        )
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        setId(id + 1)

        props.onSubmit(
            {
                id: id,
                name: inputs.name,
                email: inputs.email,
                todo: inputs.todo,
            }
        )

        setInputs({
            name:'',
            email:'',
            todo:'',
        })
    }

    return (
        <React.Fragment>
            <form className="flex flex-col justify-between p-2" onSubmit={handleSubmit}>
                <input className="p-3 border rounded-lg mb-3" type="text" placeholder="Enter Name" onChange={handleChange} value={inputs.name} name="name" required></input>
                <input className="p-3 border rounded-lg mb-3" type="text" placeholder="Enter Email" onChange={handleChange} value={inputs.email} name="email" required></input>
                <textarea className="p-3 border rounded-lg mb-3" type="text" placeholder="Enter ToDo" onChange={handleChange} value={inputs.todo} name="todo" required></textarea>
                <button className="bg-green-200 mx-auto rounded-lg p-2 px-4 text-xl mb-3">Assign New To-Do</button>
            </form>
        </React.Fragment>
    )
}

export default ToDoForm;