import React, { useContext } from 'react'
import { TodoContext } from '../../../TodoContext'


export default function Activity() {

    const [todos, setTodos ] = useContext(TodoContext)

    return (
        <React.Fragment>
            <section>
                {todos.map(i => <p> {i.name} </p>)} 
            </section>
        </React.Fragment>
    )
}
