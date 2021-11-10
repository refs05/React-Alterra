import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
    {
        id: 1,
        title: "Mengerjakan Exercise",
        completed: true
    },
    {
        id: 2,
        title: "Mengerjakan Assignment",
        completed: false
    }
]

export const sliceTodo = createSlice({
    name: "todo",
    initialState: {
        todos: initialValue
    },
    reducers: {
        hapusTodo: (state, action) => {
            state.todos = state.todos.filter((item) => item.id !== action.payload)
        },
        tambahTodo: (state, action) => {
            const newTodo = {id: initialValue[initialValue.length-1].id + 1, ...action.payload}

            state.todos = [...state.todos, newTodo]
        },
        gantiStatus: (state, action) => {
            state.todos = state.todos.map((item)=> item.id === action.payload ? { ...item, completed: !item.completed} : item)
        }
    }
})

export const {hapusTodo, tambahTodo, gantiStatus} = sliceTodo.actions;
export default sliceTodo.reducer