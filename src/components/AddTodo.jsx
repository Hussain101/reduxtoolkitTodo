import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';
addTodo
const AddTodo = () => {
    const [input, setinput] = useState("");
    const dispatch=useDispatch();
    const AddTodoHandler = (e) => {
        e.preventdefault;
        dispatch(addTodo(input))
    }
  return (
    <div>
        <form onSubmit={AddTodoHandler}>
            <p>Add your daily tasks here</p>

            <input type="text" value={input} onChange={(e) => {setinput(e.target.value)}} />
        </form>
    </div>
  )
}

export default AddTodo;