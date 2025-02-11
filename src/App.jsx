import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/todocontext'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'

function App() {
  // const [count, setCount] = useState(0)
  const [todos,setTodo]=useState([])

  const addTodo=(todo)=>{
    setTodo((prev)=>[...prev,todo]);
  }
  const removeTodo=(id)=>{
    setTodo((prev)=>prev.filter((todo)=>todo.id!==id));
  }
  const toggleTodo=(id)=>{
    setTodo((prev)=>prev.map((todo)=>todo.id===id?{...todo,completed:!todo.completed}:todo));
  }
  const editTodo=(id,todo)=>{
    setTodo((prev)=>prev.map((todo)=>todo.id===id?{...todo,title:todo.title}:todo));
  }
  useEffect(() => {
    const temp=JSON.parse(localStorage.getItem('todos'));
    if(temp && temp.length>0){
      setTodo(temp);
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  }, [todos])
  

  return (
    <TodoProvider value={{todos,addTodo,removeTodo,toggleTodo,editTodo}}>
      <div className='w-full h-screen flex justify-center xl:p-10 p-2'>
      <div className='w-[100%] xl:w-[40%] bg-gray-300 rounded max-h-[80%] p-2 flex flex-col gap-3'>
          <div className='text-center py-2'>
            <h2 className='font-extrabold text-3xl'>Manage your Todo's</h2>
          </div>
          <div>
            <TodoInput/>
          </div>
          <div className='flex flex-col gap-2 overflow-scroll h-full scrollbar'>
            {todos.map((todo)=>( <TodoItem key={todo.id} todo={todo}/>))}
          </div>
      </div>
      </div>
    </TodoProvider>
  )
}

export default App
