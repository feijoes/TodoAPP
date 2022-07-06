import React from 'react'
import '../config'
const CreateTasks = () => {
  return (
    <>
    <h1>Create</h1>
    <form method="post" action={global.config.urlAPI} >
      <input type="text" name="title" />
      <input type="text" name="desc" />
      <input type="submit" value="Submit" />        
    </form>
  </>
  )
}

export default CreateTasks