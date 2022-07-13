import React,{useState} from 'react'
import '../config'
import axios from 'axios'
const CreateTasks = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const create =  async (event)=>{
    event.preventDefault();
    await axios.post(global.config.urlAPI,{
      title: inputs.title,
      desc: inputs.desc
    }, { withCredentials: true })
  }

  return (
    <>
    <h1>Create</h1>
    <form onSubmit={create}>
      <input type="text" name="title" value={inputs.title || ''} onChange={handleChange}/>
      <input type="text" name="desc" value={inputs.desc || ''} onChange={handleChange}/>
      <input type="submit" value="Submit" />        
    </form>
  </>
  )
}

export default CreateTasks