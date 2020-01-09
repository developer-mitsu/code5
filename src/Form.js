import React, {useState} from 'react'
import './main.css'

const Form = ({addTodos}) => {

    const [value, setValue] = useState(``)

    const hundleSubmit = (e) => {
        e.preventDefault()
        addTodos(value)
        setValue('')
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
            value = {value}
        />
        <button className='addInput' type="submit">add</button>
    </form>
    )
}

export default Form