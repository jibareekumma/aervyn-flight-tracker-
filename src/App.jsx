

import { Routes, Route } from 'react-router-dom'
import Login from "./components/Login"
import Register from "./components/Register"
import Intro from "./components/Intro"





function App() {
 

  return (
    <>
      
      
      <Routes>

        <Route  path = "/" element = {<Intro />} />
        <Route  path = "/register" element = {<Register />} />
        <Route  path = "/login" element = {<Login />} />
      </Routes>
    </>
  )
}

export default App
