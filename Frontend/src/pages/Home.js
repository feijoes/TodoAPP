import React,{useState} from 'react'
import "../config";
import "../static/Home.css"
import axios from 'axios';
import { set } from 'mongoose';

export const Home = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(inputs.username && inputs.password){
    const login = await axios.post(global.config.url,{
      username: inputs.username,
      password: inputs.password
    }, { withCredentials: true })
    setInputs({})
  }
  
}
  

    return( 
        <div className='container center'>
            <div>
              <h1>Tasks Manager</h1>
              <p>Here where you completed you tasks</p>
            </div>
            <div>
              <h2>Login</h2>
              <form onSubmit={handleSubmit}>           
                <input type="text" name="username" value={inputs.username || ''} onChange={handleChange}/>
                <input type="password" name="password" value={inputs.password || ''} onChange={handleChange} />
                <input id={inputs.username && inputs.password ? 'notready' : ''} disabled data-bs-toggle="button" className="btn btn-success"type="submit" value="Submit" />    
              </form>
            </div>
        </div>
    )
}


