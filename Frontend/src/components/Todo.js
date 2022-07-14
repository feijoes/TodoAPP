import React,{useState} from 'react'
import '../static/Todo.css'
import Draggable from 'react-draggable';
export const Todo = ({task,setZindex}) => {
  

 
  return (
    <Draggable onDrag={z}}>
      <div className='box' > 
      <div className="insidebox">
        <div className="editTodo"style={{backgroundColor: task.color}}>
        </div>
        <div>
          <li >
            <h2>{task.title}</h2>
            <p>{task.desc}</p>
          </li>
        </div>
        </div>
      </div>
    </Draggable>
  )
}
