// Todo.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleEdit, editTodo, toggleCompleted, loadTodos, savedTodos } from "../features/todoSlice";
import { FaTrash, FaSave, FaEdit, FaCheck } from "react-icons/fa";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleEdit = (todo) => {
    dispatch(toggleEdit(todo.id));
  };

  const handleSave = (todo, newText) => {
    dispatch(editTodo({ id: todo.id, text: newText }));
    dispatch(toggleEdit(todo.id));
  };
 const handleCheck = (id) =>{
    dispatch(toggleCompleted(id))
 }
 useEffect(() => {
  dispatch(loadTodos());
  dispatch(savedTodos());
  
 }, [dispatch])
 
  return (
    <div className="w-full px-10   my-4">
      <div className="list-none ">
        {todos?.map((todo) => (
          <div
            key={todo.id}
            className="bg-gray-800 flex px-10 border-[1px] border-gray-400 justify-between items-center text-white p-2"
          >
            {todo.editing ? (
              <>
                <input
                  className="text-xl p-2 bg-gray-600 focus:outline-none text-white"
                  type="text"
                  value={todo.text}
                  onChange={(e) =>
                    dispatch(editTodo({ id: todo.id, text: e.target.value }))
                  }
                />
                <button
                  className="mx-2  p-2 text-green-300 text-2xl "
                  onClick={() => handleSave(todo, todo.text)}
                >
                  <FaSave />
                </button>
              </>
            ) : (
              <>
                <div className="flex">
                  <button
                  onClick={() => handleCheck(todo.id)}
                  className={`mx-2 border-[1px] p-1  ${
                    todo.completed
                      ? "border-green-500  bg-green-600 text-black"
                      : "border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white"
                  }`} ><FaCheck /></button>
                <p className={`text-xl ${
                    todo.completed ? "line-through":""}`}>{todo.text}</p>
                </div>
                <div>
                  <button
                    className="mx-2 border-[1px] border-yellow-400 p-2 text-yellow-300 text-2xl "
                    onClick={() => handleEdit(todo)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="mx-2 px-2 text-red-300 text-2xl "
                    onClick={() => dispatch(removeTodo(todo.id))}
                  >
                    <FaTrash />
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
