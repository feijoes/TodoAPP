import React, {useEffect,useState} from 'react'
import "../config";
export const Home = () => {
    const [todo,setTodo] = useState([])
    useEffect(() => {
      const get = async () =>{
        const resolve = await fetch(global.config.URL)
        const data = await resolve.json()
        setTodo(data.todos)
      }
      get()
    }, []);

    return( 
        <div>
            <div>
              <h1>Tasks Manager</h1>
              <p>Here where you completed you tasks</p>
            </div>
            <div>
              <h1>Login</h1>
              <form>
  
              </form>
            </div>
        </div>
    )
}
