import React, { useContext } from 'react';
import { TodoContext } from '../../../TodoContext';
import { FaCheckCircle } from 'react-icons/fa';

export default function TaskList() {
    const [todos, setTodos ] = useContext(TodoContext);

    console.log(todos[0].tasks)
    // Array(4) [ "cleaning", "studying", "laundry", "lunch with family" ]

    return (
        <section className="taskListContainer">
            <section className="taskSubContainer">
                <h2> Due Today {todos.length} </h2>
                <section className="taskList">
                   { todos[0].tasks.map((item, key) => {
                       return (
                        <div className="task" key={item.id}>
                            <p> {item} <span> <FaCheckCircle />  </span> </p>
                            <hr />
                        </div>
                       )
                   }) }
                </section>
            </section>
        </section>
    )
}
