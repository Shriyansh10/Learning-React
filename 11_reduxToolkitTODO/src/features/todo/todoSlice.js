import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id:1,
            text: 'Hello World'
        }
    ]
}

function addTodoHelper(state, action) {
    const todo = {
        id:  nanoid(),
        text: action.payload
    }
    state.todos.push(todo)
}

function removeTodoHelper(state, action) {
    state.todos= state.todos.filter((todo) => {return action.payload !== todo.id})
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {addTodoHelper(state, action)},
        removeTodo: (state, action) => {removeTodoHelper(state, action)},
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo)=>{if(todo.id === action.payload.id) {
                todo.text = action.payload.text
                return todo;
            }else{
                return todo;
            }
        })
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer;