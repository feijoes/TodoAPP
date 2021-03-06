import React,{useState,useEffect} from 'react'
import '../static/Todo.css'
import Draggable from 'react-draggable';
export const Todo = ({setListTodo,setTodo,editTodo,task,actualize,setZindex,globalzindex}) => {
  const [zindex,thiszindex] = useState(task.z)
  const [position,setPosition] = useState({})
  const [first,setFirts] = useState(true)
  useEffect(()=>{
    if(!first) thiszindex(globalzindex.indexOf(task._id) + 1)
    // eslint-disable-next-line
  },[globalzindex,task._id])
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (position.x !== undefined && position.y !== undefined  ){
        actualize(e=>[...e,{
          id:task._id,
          x :  position.x,
          y: position.y,
          z: position.z 
            }]
        )
      }
    }, 500)
    return () => clearTimeout(delayDebounceFn)
// eslint-disable-next-line
  }, [position])

  function global(data) {
    let newglobal = globalzindex.filter(item => item !== task._id)
    newglobal.push(task._id)
    setFirts(false)
    setPosition({
      x: data.x,
      y: data.y,
      z:newglobal.indexOf(task._id) + 1
    })
    
    setZindex(newglobal)
};

  return (
    <Draggable onDrag={(e,data)=> global(data)} defaultPosition={{x: task.x, y: task.y}}>
      <div className='box' style={{ zIndex: zindex }} > 
      <div className="insidebox">
        <div className="editTodo"style={{backgroundColor: task.color}}>
        {editTodo && <span className='icon' onClick={()=>{setListTodo(e=>[...e,{...task, x: position.x || task.x,y:position.y || task.y}]);setTodo(e=>e.filter((ele)=>ele !== task))}}><i className="fas fa-edit"></i></span>}
        </div>
        
        <div>
          <li  className='note'>
            <h2>{task.title}</h2>
            <pre>{task.desc}</pre>
          </li>
        </div>
        </div>
      </div>
    </Draggable>
  )
}
