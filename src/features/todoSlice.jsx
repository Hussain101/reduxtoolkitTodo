import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: nanoid(),
      text: "Task to complete",
      editing: false,
      completed:false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        editing: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleEdit: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.editing = !todo.editing;
      }
    },
    editTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
    removeAll: (state,action) =>{
     state.todos = [];
    },
    toggleCompleted: (state, action) => {
      const todoToToggle = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (todoToToggle) {
        todoToToggle.completed = !todoToToggle.completed;
      }
    },
    loadTodos: (state,action) => {
      const savedTodos= JSON.parse(localStorage.getItem("todos")) || [];
      state.todos= savedTodos;
    },
    savedTodos: (state) =>{
      localStorage.setItem('todos',JSON.stringify(state.todos));
    }

  },
});

export const { addTodo, removeTodo, toggleEdit, editTodo,removeAll,toggleCompleted,loadTodos,savedTodos } = todoSlice.actions;
export default todoSlice.reducer;