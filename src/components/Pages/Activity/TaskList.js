import React, { useState, useContext } from 'react'
import { TodoContext } from '../../../TodoContext'


export default function TaskList() {
    const [todos, setTodos ] = useContext(TodoContext)

    return (
        <section className="taskListContainer">
            <section className="taskSubContainer">
                <h2> Due Today </h2>
                <section className="taskList">
                    <div className="task">
                        <p> These are the tasks</p>
                        <hr />
                    </div>
                </section>
            </section>
        </section>
    )
}
