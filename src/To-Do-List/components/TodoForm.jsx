import React, { useState } from 'react'
import "../index.css"

export const TodoForm = ({addToDo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addToDo(value);

        setValue("");   
    }
    
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text"
                value={value}
                placeholder="Enter task"
                onChange={(e) => setValue(e.target.value)}>
            </input>

            <button type="submit" className="border border-gray-300 px-4 py-2">Add Task</button>
        </form>
    )
}