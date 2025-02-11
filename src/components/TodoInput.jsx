import React, { useState } from 'react'
import { TodoContext } from '../contexts/todocontext';

const TodoInput = () => {
    const [todotext,settodotext]=useState()
    const {addTodo} = TodoContext();
    const addClick=()=>{

        if(todotext.trim()===''){
            return;
        }
        addTodo({
            id:Date.now(),
            title:todotext,
            completed:false
        });
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