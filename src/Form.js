import React, {useState} from 'react'
import './main.css'

const Form = ({todos,setTodos}) => {

    const [value, setValue] = useState(``)

    const hundleSubmit = (e) => {
        e.preventDefault()

        const newTodos = [
            ...todos, 
            value,
        ]
        setTodos(newTodos)
    }

    return (
    <form 
        className='form' 
        onSubmit={hundleSubmit}
    >
        <input  
            className='input' 
            type="text" 
            onChange = {(e) => {setValue(e.target.value)}}
        />
        <button className='addInput' type="submit">add</button>
    </form>
    )
}

export default Form