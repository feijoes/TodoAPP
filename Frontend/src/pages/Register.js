import React from 'react'
import "../config";
export const Register = () => {
  return (
  <>
    <h1>Register Page</h1>
    <form method="post" action={global.config.url + "register"} >
      <input type="text" name="username" />
      <input type="password" name="password" />
      <input type="submit" value="Submit" />        
    </form>
  </>
  )
}
