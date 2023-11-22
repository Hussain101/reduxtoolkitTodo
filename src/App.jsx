

import './App.css';
import AddTodo from './components/AddTodo';
import RemoveAll from './components/RemoveAll';
import Todo from './components/Todo';

function App() {
  

  return (
    < div className='bg-gray-400 h-screen flex-col justify-center items-center flex '>
    <p className='absolute top-0'>Practice project using react-redux-toolkit</p>
    <AddTodo />
    <Todo />
     <RemoveAll /> 
    </div>
  )
}

export default App
