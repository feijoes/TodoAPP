import React,{useEffect,useState}  from 'react'
import "../config";
import axios from 'axios';
import { Todo } from '../components/Todo';
import '../static/Loading.css'
export const Taks = () => {
    const [todo,setTodo] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
      const get = async () =>{
        const { data } = await axios.get(global.config.urlAPI, {withCredentials: true})
        setTodo(data.todos)
        setLoading(true)
      }
      get()
    }, []);
  
  if (!loading){
    return <div className="spinner-border text-primary loading" role="status"><span className="sr-only">.</span></div>
  }
  return (
    <div><ul>{todo.map((task) => <Todo key={task._id} task={task}/>)}</ul></div>
  )
}
