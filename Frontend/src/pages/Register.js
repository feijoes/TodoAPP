import React,{useState} from 'react'
import "../config";
import axios from 'axios';
import '../static/Home.css'
import { Link } from "react-router-dom";
export const Register = () => {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if((inputs.username && inputs.password) && (inputs.conconfirmpassword === inputs.password)){
    await axios.post(global.config.url + "register/",{
      username: inputs.username,
      password: inputs.password
    }, { withCredentials: true })
    setInputs({})
  } 
}

  return (
  <div className='container'>
    <h1>Register Page</h1>
    <form className="form">
                <div className="input-group flex-nowrap">
                  <span className="input-group-text" id="addon-wrapping"><i className='fas fa-user-alt' style={{'fontSize':'12px', "backgroundColor":"#E9ECEF"}}></i></span>
                    <input type="text" name="username"className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" value={inputs.username || ''} onChange={handleChange}/>
                </div> 
                <div className="input-group flex-nowrap">
                  <span className="input-group-text" id="addon-wrapping"><i style={{"backgroundColor":"#E9ECEF"}} className="fa fa-lock"></i></span>
                  <input type="password" name="password"className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" value={inputs.password || ''} onChange={handleChange}/>
                </div> 
                <div className="input-group flex-nowrap">
                  <span className="input-group-text" id="addon-wrapping"><i style={{"backgroundColor":"#E9ECEF"}} className="fa fa-lock"></i></span>
                  <input type="password" name="confirmpassword"className="form-control" placeholder="Confirm Password" aria-label="Password" aria-describedby="addon-wrapping" value={inputs.password || ''} onChange={handleChange}/>
                </div>     
                <div className="d-grid gap-2">  
                  <input onClick={handleSubmit}  disabled={!(inputs.username && inputs.password)} data-bs-toggle="button" className="btn btn-success" type="submit" value="Submit" />    
                </div>  
              </form>
              <Link to="/">Login</Link>
  </div>
  )
}
