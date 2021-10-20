import React, { useContext } from 'react'
import { TodoContext } from '../../../TodoContext'
import TaskList from './TaskList'


export default function Activity() {

    const [todos, setTodos ] = useContext(TodoContext)

    return (
            <section>
                <TaskList />


                 {/* Input field to add tasks... */}
                 <section className='addTaskInput'>
                     <input type="text" placeholder="What do you want to do today?" />
                 </section>
            </section>
    )
}
