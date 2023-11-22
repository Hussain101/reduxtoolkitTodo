import React from 'react'
import { useDispatch } from "react-redux";
import { removeAll } from '../features/todoSlice';
const RemoveAll = () => {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={() => dispatch(removeAll())} className='bg-red-600 text-2xl my-4 text-white font-semibold px-6 py-2' >
            Remove All
        </button>
    </div>
  )
}

export default RemoveAll