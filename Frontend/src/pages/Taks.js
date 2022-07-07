import React,{useEffect,useState}  from 'react'
import "../config";
import axios from 'axios';
import { Todo } from '../components/Todo';
export const Taks = () => {
    const [todo,setTodo] = useState([])
    useEffect(() => {
      const get = async () =>{
        const resolve = await axios.get(global.config.urlAPI, {withCredentials: true})
        const data = await resolve.json()
        setTodo(data.todos)
      }
      get()
    }, []);
    console.log(todo)
  return (
    <div>{ todo.map((task) => <Todo task={task}/> ) }</div>
  )
}
