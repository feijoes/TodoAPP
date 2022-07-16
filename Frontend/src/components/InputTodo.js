import React,{ useState} from 'react'
import '../static/Todo.css'
import "../config";
import axios from 'axios';
import { SelectColor } from './SelectColor';
import Draggable from 'react-draggable';
export const InputTodo = ({globalzindex,defaulttask,setTodo,show }) => {

    const [selectedOption, setSelectedOption] = useState(defaulttask?.color || 'red');
    const [inputs, setInputs] = useState({title:defaulttask?.title|| '',desc:defaulttask?.desc||'' ,x:defaulttask?.x || 150,y:defaulttask?.y || 150});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
    const handleSubmit = async (event) => {
        event.preventDefault();
        setTodo(e=>[...e,{
            _id : defaulttask._id || null,
            title: inputs.title,
            desc: inputs.desc,
            x :  inputs.x,
            y: inputs.y,
            color:selectedOption
        }])
        
        const data = {
          title: inputs.title,
          desc: inputs.desc,
          x :  inputs.x,
          y: inputs.y,
          color:selectedOption
      }
        if (!defaulttask) {
          show(e=>!e)
          await axios.post(global.config.urlAPI,data, { withCredentials: true })
          
        }
        else {
          data.globalzindex = [...globalzindex,defaulttask._id]
          show(e=>[...e].filter((todo)=> todo._id!==defaulttask._id))
          await axios.patch(global.config.urlAPI + defaulttask._id,data, { withCredentials: true })}
        
      
    } 

  return (
    <Draggable defaultPosition={{x:inputs.x, y:inputs.y}} onDrag={(e,data)=>{setInputs({...inputs,x:data.x,y:data.y})}}>
    <div className={defaulttask ?"box":'box newtodo'} style={{cursor: 'default',zIndex:100}}> 
      <div className="insidebox">
        <button className="deleteButton" onClick={()=>{
          if(defaulttask){
          show(e=>[...e].filter((todo)=> todo._id!==defaulttask._id))
          setTodo(e=>[...e,{
            _id : defaulttask._id || null,
            title: inputs.title,
            desc: inputs.desc,
            x :  inputs.x,
            y: inputs.y,
            color:selectedOption
        }])}
        else show(e=>!e)}}>X</button>
        <SelectColor selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
        <span className="checkmark" onClick={handleSubmit}> 
            <div className="checkmark_stem"></div>
            <div className="checkmark_kick"></div>
        </span>
        <div>
          <li className='note'>
            <input className='title' name='title' type={'text'} maxLength="16"placeholder="Title" aria-label="Title" aria-describedby="addon-wrapping" value={inputs.title || ''} onChange={handleChange}/>
            <textarea  type='textarea' name='desc' placeholder="Desc" aria-label="Desc" aria-describedby="addon-wrapping" value={inputs.desc || ''} onChange={handleChange}/>
          </li>
        </div>
    
        </div>
      </div>
      </Draggable>
  )
}
