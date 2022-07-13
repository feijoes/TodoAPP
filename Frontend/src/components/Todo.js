import React from 'react'

export const Todo = ({task}) => {
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.desc}</p>
    </div>
  )
}
