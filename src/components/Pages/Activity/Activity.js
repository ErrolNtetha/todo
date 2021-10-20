import React from 'react';
import TaskList from './TaskList';


export default function Activity() {

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
