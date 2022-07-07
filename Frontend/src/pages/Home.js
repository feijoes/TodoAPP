import React,{useState} from 'react'
import "../config";
import "../static/Home.css"
import axios from 'axios';
import Cookies from 'universal-cookie';
export const Home = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append( 'Accept', 'application/json')
  
    const login = await axios.post(global.config.url +"login",{
      username: inputs.username,
      password: inputs.password
    })

    const cookies = new Cookies();
    cookies.set('session', login.data, { path: '/' })
   
}
  

    return( 
        <div className='container'>
            <div>
              <h1>Tasks Manager</h1>
              <p>Here where you completed you tasks</p>
            </div>
            <div>
              <h2>Login</h2>
              <form onSubmit={handleSubmit} >           
                <input type="text" name="username" value={inputs.username || ''} onChange={handleChange}/>
                <input type="password" name="password" value={inputs.password || ''} onChange={handleChange} />
                <input type="submit" value="Submit" />    
              </form>
            </div>
        </div>
    )
}
