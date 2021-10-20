import React, { useState, createContext } from 'react'

export const TodoContext = createContext();

export const TodosContext = ({children}) => {

    const [ todos, setTodos ] = useState([
        {
            name: "Errol",
            tasks: [ "coding", "studying", "laundry", "lunch with family"],
            id: 1,
        },
    ]);

    return (
        <TodoContext.Provider value={[todos, setTodos]}>
            {children}
        </TodoContext.Provider>    
    )
}