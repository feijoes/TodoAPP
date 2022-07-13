import React from 'react'
import '../static/Todo.css'
export const Todo = ({task}) => {
  return (
    <li>
      <h2>{task.title}</h2>
      <p>{task.desc}</p>
    </li>
  )
}
