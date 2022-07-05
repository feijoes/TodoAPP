import React,{useEffect,useState}  from 'react'
import "../config";
import { Todo } from '../components/Todo';
export const Taks = () => {
    const [todo,setTodo] = useState([])
    useEffect(() => {
      const get = async () =>{
        const resolve = await fetch(global.config.urlAPI)
        const data = await resolve.json()
        setTodo(data.todos)
      }
      get()
    }, []);
  return (
    <div>{ todo.map((task) => <Todo task={task}/> ) }</div>
  )
}
