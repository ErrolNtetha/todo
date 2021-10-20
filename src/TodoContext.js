import React, { useState, createContext } from 'react'
import Activity from './components/Pages/Activity/Activity';

export const TodoContext = createContext();

export const TodosContext = (props) => {

    const [ todos, setTodos ] = useState([
        {
            name: "Mphumeleli Ntetha",
            todos: [ "cleaning", "studying", "laundry", "lunch with family"],
            id: 1,
        },
    ])

    // Use the useEffect Hook here because we 
    // gonna be fetching all user data from MongoDB database

    return (
        <TodoContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodoContext.Provider>    
    )
}