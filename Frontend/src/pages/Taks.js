import React,{useEffect,useState}  from 'react'
import "../config";
import axios from 'axios';
import { Todo } from '../components/Todo';
import '../static/Loading.css'
export const Taks = () => {
    const [todo,setTodo] = useState([])
    useEffect(() => {
      const get = async () =>{
        const { data } = await axios.get(global.config.urlAPI, {withCredentials: true})
        setTodo(data.todos)
      }
      get()
    }, []);
  
  if (!todo.length){
    return <div className="spinner-border text-primary loading" role="status"><span className="sr-only">.</span></div>
  }
  return (
    <div>{ todo.map((task) => <Todo key={task._id} task={task}/> ) }</div>
  )
}
