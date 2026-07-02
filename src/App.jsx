import { Routes, Route, Navigate } from 'react-router-dom'
import Login from "./components/Login"
import Register from "./components/Register"
import Intro from "./components/Intro"
import Dashboard from './components/Dashboard'
import Favorite from './components/Favorite'
import Bookings from './components/Bookings'
import FlightResult from './components/resultPages/FlightResult'
import HotelResult from './components/resultPages/HotelResult'
import CarResult from './components/resultPages/CarResult'
import { useAuth } from './context/AuthContext'
import { FavoritesProvider } from './context/FavoriteContext'
function App() {
  const { user, loading } = useAuth()
    if (loading) return <p>Loading...</p>
 
  return (
    <>
      <FavoritesProvider>
      <Routes>
        <Route  path = "/" element = {<Intro />} />
        <Route  path = "/register" element = {<Register />} />
        <Route  path = "/login" element = {<Login />} />
        {/* <Route path = "/dashboard" element = {<Dashboard/>} /> */}
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} 
       
            />
        <Route path = '/flightResult' element = {<FlightResult/>}/>
        <Route path = '/hotelResult' element = {<HotelResult/>} />
        <Route path = '/carResult' element = {<CarResult/>} />
        <Route path = '/favorite' element = {<Favorite/>} />
        <Route path = '/bookings' element = {<Bookings/>} />
      </Routes>
      </FavoritesProvider>
    </>
  )
}
export default App