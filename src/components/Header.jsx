

import { useState, useEffect } from "react"
import { supabase } from "../lib/supabaseClient"
import dummyProfile from "/photos/dummy profile.jpeg"
import "../css/Header.css"


import bellIcon from "/icons/bell_icon.png"
import favoriteIcon from "/icons/favorite_icon.png"


const Header = function({ activeTabs, setActiveTabs } ){
    const [userName, setUserName] = useState("")

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            if (user) {
                setUserName(user.user_metadata?.full_name || "User")
            }
        }
        getUser()
    }, [])

    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long', 
        day: 'numeric',
        month: 'long'
    })

    return <>
        
        
    <section className="user-detail-header">
        <div className="user-detail-header-text">
            <p>{today}</p>
            <h6>{userName}</h6>
        </div>

        <div className="user-detail-header-icons">
            

            <div className="bell-icon">
                <img src={bellIcon} alt="bell icon" loading="lazy" />
            </div>

            <img src={dummyProfile} alt="user-profile"
            className="user-profile-photo"
            loading="lazy"
            />
        </div>
    </section>

    <section className="grouped-navigation">
        <div className={`grouped-item item-flight 
        ${activeTabs === "flights" ? "active" : ""}`}
                onClick={() => setActiveTabs("flights")}>
        Flights</div>
        <div className={`grouped-item item-hotel
        ${activeTabs === "hotels" ? "active" : ""}`}
        onClick = {() => setActiveTabs("hotels")}>
            Hotels</div>
        <div className = {`grouped-item item-car
            ${activeTabs === "cars" ? "active" : ""}`}
            onClick = {() => setActiveTabs("cars")}>
            Cars</div>
    </section>
</>
   
}

export default Header