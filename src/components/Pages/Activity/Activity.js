import React, { useState, useContext } from 'react';
import { TodoContext } from '../../../TodoContext';
import { FaPlus } from 'react-icons/fa';
import TaskList from './TaskList';

export default function Activity() {
let [todos, setTodos ] = useContext(TodoContext);
const [input, setInput] = useState(''); // Catch user input and store that in input variable


    // function to add what is in "input" to the existing tasks
    const addTask = () => {
        console.log(...todos[0].tasks, input);
    }

    return (
            <section>
                <TaskList />
                 {/* Input field to add tasks... */}
                 <section className='addTaskInput'>
                     <input 
                        type="text" 
                        placeholder="What do you want to do today?" 
                        onChange={(e) => setInput(e.target.value)} 
                    />
                     <span  className='faPlus' onClick={addTask}>
                         <FaPlus />                     
                     </span>
                 </section>
            </section>
    )
}
