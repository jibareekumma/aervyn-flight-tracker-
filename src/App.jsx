

import { Routes, Route, Navigate } from 'react-router-dom'
import Login from "./components/Login"
import Register from "./components/Register"
import Intro from "./components/Intro"
import Dashboard from './components/Dashboard'
import { useAuth } from './context/AuthContext'





function App() {


  const { user, loading } = useAuth()

    if (loading) return <p>Loading...</p>
 

  return (
    <>
      
      
      <Routes>

        <Route  path = "/" element = {<Intro />} />
        <Route  path = "/register" element = {<Register />} />
        <Route  path = "/login" element = {<Login />} />
        {/* <Route path = "/dashboard" element = {<Dashboard/>} /> */}
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} 
            />
      </Routes>
    </>
  )
}

export default App
