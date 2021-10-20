import React, { useState, createContext } from 'react'

export const TodoContext = createContext();

export const TodosContext = ({children}) => {

    const [ todos, setTodos ] = useState([
        {
            name: "Mphumeleli Ntetha",
            tasks: [ "cleaning", "studying", "laundry", "lunch with family"],
            id: 1,
        },
        {
            name: "Syanda Dlimini",
            tasks: [ "cleaning", "studying", "laundry", "lunch with family"],
            id: 2,
        },
    ]);

    return (
        <TodoContext.Provider value={[todos, setTodos]}>
            {children}
        </TodoContext.Provider>    
    )
}