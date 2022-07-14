import React,{useState} from 'react'
import "../config";
import axios from 'axios';


export const Register = () => {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(inputs.username && inputs.password){
    await axios.post(global.config.url + "register/",{
      username: inputs.username,
      password: inputs.password
    }, { withCredentials: true })
    setInputs({})
  } 
}

  return (
  <>
    <h1>Register Page</h1>
    <form onSubmit={handleSubmit} >
      <input type="text" name="username"class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" value={inputs.username || ''} onChange={handleChange}/>
      <input type="password" name="password"class="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" value={inputs.password || ''} onChange={handleChange}/>
      <input type="submit" value="Submit" />        
    </form>
  </>
  )
}
