
import './static/App.css';
import React from "react"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Taks } from './pages/Taks';
import CreateTasks from './pages/CreateTasks';
const App = () => {

  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/tasks" element={<Taks />} />
          <Route exact path="/Createtodo" element={<CreateTasks />} />
        </Routes>
    </Router>
    </>
    )
}

export default App;
