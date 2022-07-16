import React,{ useRef,useState} from 'react'
import '../static/Todo.css'
import "../config";
import axios from 'axios';
import { SelectColor } from './SelectColor';
export const InputTodo = ({ setTodo,show }) => {
    const myRef = useRef();
    const [selectedOption, setSelectedOption] = useState(null);
    const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
    const handleSubmit = async (event) => {
        event.preventDefault();
        setTodo(e=>[...e,{
            title: inputs.title,
            desc: inputs.desc,
            x :  myRef.current.offsetLeft,
            y: myRef.current.offsetTop,
            color:selectedOption
        }])
        show(e=>!e)

        await axios.post(global.config.urlAPI,{
            title: inputs.title,
            desc: inputs.desc,
            x :  myRef.current.offsetLeft,
            y: myRef.current.offsetTop,
            color:selectedOption
        }, { withCredentials: true })
    } 
      
  return (
    <div ref={myRef} className='box newtodo' style={{cursor: 'default',zIndex:3}}> 
      <div className="insidebox">
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
  )
}
