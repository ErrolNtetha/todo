import React, { useContext } from 'react';
import { TodoContext } from '../../../TodoContext';
import { FaCheckCircle, FaTrash } from 'react-icons/fa';

export default function TaskList() {
    const [todos, setTodos ] = useContext(TodoContext);

    return (
        <section className="taskListContainer">
            <section className="taskSubContainer">
                <h2> Due Today <span>  </span></h2>
                <section className="taskList">
                   { todos[0].tasks?.map((item, key) => {
                       return (
                        <div className="task" key={item.id}>
                            <p> {item} <span> <FaCheckCircle /> <FaTrash className="faTrash" /> </span> </p>
                            <hr />
                        </div>
                       )
                   }) }
                </section>
            </section>
        </section>
    )
}
