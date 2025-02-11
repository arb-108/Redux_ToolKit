import React, { createContext, useContext } from "react";

export const TodoCon = createContext({
    todos: [
        {
            id: 1,
            title: "Todo 1",
            completed: false,
        },
        {
            id: 2,
            title: "Todo 2",
            completed: false,
        },
    ],
    addTodo: (todo) => {},
    removeTodo: (id) => {},
    toggleTodo: (id) => {},
    editTodo: (id,todo) => {},
});

export const TodoProvider = TodoCon.Provider;

export const TodoContext=()=>{
    return useContext(TodoCon);
}

