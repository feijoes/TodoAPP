

import React,{createContext,useState} from "react"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Taks } from './pages/Taks';
import CreateTasks from './pages/CreateTasks';
const App = () => {

  const [login, setLogin] = useState(false);
  const UserContext = createContext();
  return (
    <>
    <UserContext.Provider value={{login,setLogin}}>
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/tasks" element={<Taks />} />
          <Route exact path="/Createtodo" element={<CreateTasks />} />
        </Routes>
    </Router>
    </UserContext.Provider>
    </>
    )
}

export default App;
