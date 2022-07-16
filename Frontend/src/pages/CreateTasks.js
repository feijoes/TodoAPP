import React,{useState} from 'react'

const CreateTasks = () => {
  const [inputs, setInputs] = useState({});

  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  
  return (
    <>
    <h1>Create</h1>
    <form >
      <input type="text" name="title" value={inputs.title || ''} onChange={handleChange}/>
      <input type="text" name="desc" value={inputs.desc || ''} onChange={handleChange}/>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
          <select name="color"onChange={handleChange} className="form-select" id="inputGroupSelect01">
          </select>
      </div>
      <input type="submit" value="Submit" />        
    </form>
  </>
  )
}

export default CreateTasks