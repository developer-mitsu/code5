import React, {useState} from 'react'
import Title from './Title'
import Form from './Form'
import List from './List'
import './main.css'

const App = () => {

    const [todos, setTodos] = useState([
        '宿題をする',
        '洗濯をする',
        'ああああああ',
        'いいいいいい',
        'ううううううう'
    ])

    const addTodos = (value) => {
        setTodos([
            ...todos,
            value
        ])    
    }

    return (
        <div className='app'>
            <Title />
            <Form  addTodos={addTodos}/>
            <List todos={todos} />
        </div>
    )
} 

export default App