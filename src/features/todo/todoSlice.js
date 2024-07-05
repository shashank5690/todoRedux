import { createSlice,nanoid } from "@reduxjs/toolkit";


//initial state is and object
const initialState = {
    todos: [{id: 1, text:"Enter the task below"}] //property
}

export const todoSlice = createSlice({
    //name is property in reduxtoolkit
    name: 'todo', 
    initialState,
    //methods take action and state and reducer mai do
    //cheeze ati hai property and fucntion
    reducers: {
        addTodo: (state,action) => {
            const todo = {
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter(todo => todo.id
            !== action.payload)
        },
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer