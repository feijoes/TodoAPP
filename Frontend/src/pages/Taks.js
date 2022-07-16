import React,{useEffect,useState}  from 'react'
import "../config";
import axios from 'axios';
import { Todo } from '../components/Todo';
import '../static/Tasks.css'
import '../static/Loading.css'
import Sidebar from '../components/Sidebar';
import { InputTodo } from '../components/InputTodo';

import { Link } from "react-router-dom";
export const Taks = () => {
    const [todo,setTodo] = useState([])
    const [loading, setLoading] = useState(false)
    const [globalzindex,setZindex] = useState([])
    const [newtodo, setNewTodo] = useState(false)
    const [actualize,setactualize] = useState([])
    const [editTodo,setEditTodos] = useState(false)
    const [listedit,setListTodo] = useState([])
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
      }, 501)
      
      return () => clearTimeout(delayDebounceFn)
    // eslint-disable-next-line
    }, [actualize])

  if (!loading){
    return <div className="spinner-border text-primary loading" role="status"><span className="sr-only">.</span></div>
  }
  if (todo.length ===0 && loading){ <Link to="/">Login Page</Link>}
  return (
    <div>

      <div>
        <ul>
          {listedit.length >=1 && listedit.map((task)=> <InputTodo key={task}globalzindex={globalzindex} defaulttask={task} setTodo={setTodo}show={setListTodo}/>)}
          {newtodo && <InputTodo key={'new'} setTodo={setTodo} show={setNewTodo}/>}
          {todo.map((task) => <Todo key={task._id} setListTodo={setListTodo}editTodo={editTodo}actualize={setactualize}task={task} setTodo={setTodo} globalzindex={globalzindex} setZindex={setZindex}/>)}</ul>
      </div>
      
      <div className='bar'><Sidebar setEditTodos={setEditTodos} newtodo={setNewTodo}/></div>
      
    </div>
  )
}
