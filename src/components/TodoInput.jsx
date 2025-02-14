import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoReducer';

const TodoInput = () => {
    const [todotext,settodotext]=useState('')
    const dispatch=useDispatch();
    const addClick=()=>{
        if(todotext.trim()===''){
            return;
        }
        dispatch(addTodo(todotext));
        settodotext('');
    }
    
  return (
    <div className='flex bg-gray-100 shadow rounded'>
        <input type='text' placeholder='Add a todo' className='flex-1 pl-2 focus:outline-none 
        ' value={todotext} onChange={(e)=>settodotext(e.target.value)}/>
        <button className='bg-blue-500 p-2 rounded-r-sm hover:bg-blue-700'
        onClick={addClick}>Add</button>
    </div>
  )
}

export default TodoInput