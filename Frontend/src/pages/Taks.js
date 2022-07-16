import React,{useEffect,useState}  from 'react'
import "../config";
import axios from 'axios';
import { Todo } from '../components/Todo';
import '../static/Tasks.css'
import '../static/Loading.css'
import Sidebar from '../components/Sidebar';
import { InputTodo } from '../components/InputTodo';


export const Taks = () => {
    const [todo,setTodo] = useState([])
    const [loading, setLoading] = useState(false)
    const [globalzindex,setZindex] = useState([])
    const [newtodo, setNewTodo] = useState(false)
    const [actualize,setactualize] = useState([])
    useEffect(() => {
      const get = async () =>{
        const { data } = await axios.get(global.config.urlAPI, {withCredentials: true})
        setTodo(data.todos)
        setZindex(data.todos.map(o => o['_id']))
        setLoading(true)
      }
      get()
    }, []);
    
    useEffect(() => {
      const delayDebounceFn = setTimeout(() => {
          actualize.forEach((i)=>{
            console.log('save')
            axios.patch(global.config.urlAPI + i.id,{
              x :  i.x,
              y : i.y,
              globalzindex:globalzindex
          }, { withCredentials: true })})
          setactualize([])
      }, 1500)
      
      return () => clearTimeout(delayDebounceFn)
    }, [actualize])

  if (!loading){
    return <div className="spinner-border text-primary loading" role="status"><span className="sr-only">.</span></div>
  }
  return (
    <div>

      <div>
        <ul>
          {newtodo && <InputTodo setTodo={setTodo} show={setNewTodo}/>}
          {todo.map((task) => <Todo key={task._id} actualize={setactualize}task={task} globalzindex={globalzindex} setZindex={setZindex}/>)}</ul>
      </div>
      <div className='bar'><Sidebar newtodo={setNewTodo}/></div>
      
    </div>
  )
}
