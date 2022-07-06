import React,{useState} from 'react'
import "../config";
import "../static/Home.css"
export const Home = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append( 'Accept', 'application/json',)
    fetch(global.config.url + 'login/',{
      method: "POST",
      mode: 'cors',
      headers: myHeaders,
      body: JSON.stringify({
        username: inputs.username,
        password: inputs.password
    })})


  }

    return( 
        <div className='container'>
            <div>
              <h1>Tasks Manager</h1>
              <p>Here where you completed you tasks</p>
            </div>
            <div>
              <h2>Login</h2>
              <form onSubmit={handleSubmit}>           
                <input type="text" name="username" value={inputs.username || ''} onChange={handleChange}/>
                <input type="password" name="password" value={inputs.password || ''} onChange={handleChange} />
                <input type="submit" value="Submit" />    
              </form>
            </div>
        </div>
    )
}
