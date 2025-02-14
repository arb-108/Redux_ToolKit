import { createSlice,nanoid } from "@reduxjs/toolkit";

let savedTodos ;
try {
    savedTodos= JSON.parse(localStorage.getItem('todos'));4
    // console.log(savedTodos);
} catch (error) {
    savedTodos=[];
}

const initialState ={
    
    todos: savedTodos?savedTodos: [{
        id: nanoid(),
        title: "Learn Redux",
        completed: false
    }]
}
// console.log(initialState)
export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                title: action.payload,
                completed: false
            };
            state.todos.push(newTodo);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.title = action.payload.title;
            }
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        }

    }
});

export const { addTodo, toggleTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;