import React from 'react'
import "../config";
import "../static/Home.css"
export const Home = () => {

    return( 
        <div className='container'>
            <div>
              <h1>Tasks Manager</h1>
              <p>Here where you completed you tasks</p>
            </div>
            <div>
              <h2>Login</h2>
              <form to={global.config.url + "login/"} method="POST">
  
              </form>
            </div>
        </div>
    )
}
