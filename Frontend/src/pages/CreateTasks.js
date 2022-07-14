import React,{useState, useEffect} from 'react'
import '../config'
import axios from 'axios'
const CreateTasks = () => {
  const [inputs, setInputs] = useState({});
  const [colors,setColors] = useState([])
    useEffect(() => {
      const get = async () =>{
        const { data } = await axios.get(global.config.url + "color", {withCredentials: true})
        setColors(data)

      }
      get()
    }, []);
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const create =  async (event)=>{
    event.preventDefault();
    await axios.post(global.config.urlAPI,{
      title: inputs.title,
      desc: inputs.desc,
      color:inputs.color || colors[0].color
    }, { withCredentials: true })
  }
  console.log(inputs)
  return (
    <>
    <h1>Create</h1>
    <form onSubmit={create}>
      <input type="text" name="title" value={inputs.title || ''} onChange={handleChange}/>
      <input type="text" name="desc" value={inputs.desc || ''} onChange={handleChange}/>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
          <select name="color"onChange={handleChange} className="form-select" id="inputGroupSelect01">
          {
            colors && colors.map((color,key) => <option key={key} value={color.color}>{color.color}</option>)
          }
          </select>
      </div>
      <input type="submit" value="Submit" />        
    </form>
  </>
  )
}

export default CreateTasks