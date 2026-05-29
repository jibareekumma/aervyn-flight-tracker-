import homeIcon from "/icons/home_icon.png"
import searchIcon from "/icons/search_icon.png"
import favoriteIcon from "/icons/favorite_icon.png"
import profileIcon from "/icons/profile_icon 2.png"
import calendarIcon from "/icons/bell_icon.png"
import settingsIcon from "/icons/spin-rotate.png"
import Header from "./Header"
import NavigatedSection from "./NavigatedSection"
import "../css/Header.css"
import Destination from "./Destination"
import FooterNavigation from "./FooterNavigation"
import mainIcon from "/icons/main-icon.png"



import "../css/DskDashboard.css"

import { useState } from "react"

const Dashboard = function(){

    const [activeTabs, setActiveTabs] = useState('flights')

    return <>
        <div className="dashboard-layout">

            <aside className="desktop-sidebar">
                <div className="sidebar-top">
                    <img src = {mainIcon}
                    alt="logo" className="sidebar-logo" />
                </div>

                <div className="sidebar-icons">
                    <div className="sidebar-icon active">
                        <img src={homeIcon} alt="home" />
                    </div>
                    <div className="sidebar-icon">
                        <img src={searchIcon} alt="search" />
                    </div>
                    <div className="sidebar-icon">
                        <img src={calendarIcon} alt="calendar" />
                    </div>
                    <div className="sidebar-icon">
                        <img src={favoriteIcon} alt="favorites" />
                    </div>
                    <div className="sidebar-icon">
                        <img src={profileIcon} alt="profile" />
                    </div>
                </div>

                <div className="sidebar-bottom">
                    <div className="sidebar-icon">
                        <img src={settingsIcon} alt="settings" />
                    </div>
                </div>
            </aside>

            <div className="main-dashboard">
                <Header activeTabs = {activeTabs} 
                setActiveTabs = {setActiveTabs}/>
                <NavigatedSection activeTabs = {activeTabs}/>
                <Destination/>
                <FooterNavigation/>
            </div>
        </div>
    </>
}

export default Dashboard