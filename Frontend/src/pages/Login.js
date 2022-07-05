import React from 'react'
import "../config";
export const Login = () => {
  return (
    <>
    <h1>Login Page</h1>
    <form method="POST" action={global.config.url + "login"}>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <input type="submit" value="Submit" />
    </form>'
    </>
  )
}
