

import { useNavigate } from "react-router-dom"
import { supabase } from "../lib/supabaseClient"

import mainIcon from "/icons/main-icon.png"
import homeIcon from "/icons/home_icon.png"
import bookingIcon2 from "/icons/booking_icon2.png"
import calendarIcon from "/icons/bell_icon.png"
import favoriteIcon from "/icons/favorite_icon.png"
import profileIcon from "/icons/profile_icon 2.png"
import settingsIcon from "/icons/spin-rotate.png"

import "../css/Sidebar.css"

// active: "dashboard" | "bookings" | "favorite" | "profile"
const Sidebar = function ({ active }) {
    const navigate = useNavigate();

    const handleLogOut = async () => {

        await supabase.auth.signOut();
        navigate('/login')
    }

    return (
        <aside className="desktop-sidebar">
            <div className="sidebar-top">
                <img src={mainIcon} alt="logo" className="sidebar-logo" />
            </div>

            <div className="sidebar-icons">
                <div
                    className={`sidebar-icon ${active === "dashboard" ? "active" : ""}`}
                    onClick={() => navigate('/dashboard')}
                >
                    <img src={homeIcon} alt="home" />
                </div>

                <div
                    className={`sidebar-icon ${active === "bookings" ? "active" : ""}`}
                    onClick={() => navigate('/bookings')}
                >
                    <img src={bookingIcon2} alt="bookings" />
                </div>

                <div className="sidebar-icon">
                    <img src={calendarIcon} alt="calendar" />
                </div>

                <div
                    className={`sidebar-icon ${active === "favorite" ? "active" : ""}`}
                    onClick={() => navigate('/favorite')}
                >
                    <img src={favoriteIcon} alt="favorites" />
                </div>

                <div
                    className={`sidebar-icon ${active === "profile" ? "active" : ""}`}
                    onClick={() => navigate('/profile')}
                >
                    <img src={profileIcon} alt="profile" />
                </div>
            </div>

            <div className="sidebar-bottom">
                <div className="sidebar-icon">
                    <img src={settingsIcon} alt="settings" />
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;