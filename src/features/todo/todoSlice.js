import { createSlice, nanoid } from "@reduxjs/toolkit";

//state params passed in the reducers refers to this below value its a single source of truth for them
const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};
//action will be the values we want to add edit or modify as we wish

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload, //payload is an object
      };
      state.todos.push(todo); //we are pushing new state in existing todos
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

//Alwaysn remember we are going to update our global store using reducers only without reducers we cant update.

export const { addTodo, removeTodo } = todoSlice.actions; // we are exporting this such that we are ale to perform CRUD operations in our store from any React components

export default todoSlice.reducer; //we are exporting this so that we can register all our reducers with our gloal store
