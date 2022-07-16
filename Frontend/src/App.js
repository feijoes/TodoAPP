

import React from "react"
import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Taks } from './pages/Taks';

const App = () => {

  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={localStorage.getItem('userinfo') ? <Navigate  to="/tasks" /> : <Home/>} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/tasks" element={<Taks />} />
        </Routes>
    </Router>
    </>
    )
}

export default App;
