import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';
addTodo
const AddTodo = () => {
    const [input, setinput] = useState("");
    const dispatch=useDispatch();
    const AddTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
setinput("")
    }
  return (
    <div>
        <form onSubmit={AddTodoHandler}>
            <p className='my-3 text-4xl font-bold text-center'>Tasks to do!</p>
            

            <input type="text" className='px-4 py-1 bg-gray-600 text-white focus:outline-none '  value={input} onChange={(e) => {setinput(e.target.value)}} />
            <button type='submit' className='px-4 py-1 bg-gray-800 text-white '>Add Todo</button>
        </form>
    </div>
  )
}

export default AddTodo;