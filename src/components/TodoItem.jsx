import React, { useRef, useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { FaSave } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { TodoContext } from '../contexts/todocontext';

const TodoItem = ({ todo }) => {
    const [todotext, settodotext] = useState(todo.title);
    const [completed, setcompleted] = useState(todo.completed);
    const [editabled, seteditabled] = useState(false);

    const inputref=useRef(null);

    const {todos,addTodo,removeTodo,editTodo,toggleTodo}=TodoContext();
    const updateTodo=()=>{
        editTodo(todo.id,{...todo,title:todotext});
        seteditabled((pre)=>!pre);
    }
    const updatecompleted=()=>{
        // setcompleted((pre)=>!pre);
        toggleTodo(todo.id);
        seteditabled(false);    
    }
    const deletetodo=()=>{
        removeTodo(todo.id);
    }
    const handleEdit=()=>{  
        seteditabled((pre)=>!pre);
        inputref.current.focus();
    }
  return (
    <div>
        <div className={`flex   p-2 rounded justify-center items-center
        ${todo.completed?'bg-red-500':'bg-green-500'}`}>
            <input  type='checkbox' className={`mr-2 cursor-pointer`} 
            checked={todo.completed}
            onChange={updatecompleted}/>
            <input ref={inputref} type='text' className={`flex-1 text-lg focus:outline-none 
            ${editabled?"bg-green-400":""}  ${todo.completed?'line-through':''} rounded`} 
            value={todotext}
            onChange={(e)=>{settodotext(e.target.value)}}
            readOnly={!editabled}
            />
            <div className='flex gap-2 px-2'>
                <button disabled={todo.completed}>
                {

                    editabled?<FaSave className='text-2xl cursor-pointer' onClick={updateTodo}/>:
                    <CiEdit className='text-2xl cursor-pointer'  
                    onClick={handleEdit}
                    />
                }
                </button>
                <AiFillDelete className='text-2xl cursor-pointer'
                onClick={deletetodo}/>
            </div>
        </div>
    </div>
  )
}

export default TodoItem