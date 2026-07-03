

import Header from "./Header"
import NavigatedSection from "./NavigatedSection"
import Destination from "./Destination"
import FooterNavigation from "./FooterNavigation"

import Sidebar from "./Sidebar"

import "../css/Header.css"

import { useState } from "react"

const Dashboard = function () {

    const [activeTabs, setActiveTabs] = useState('flights')

    return <>
        <div className="dashboard-layout">

            <Sidebar active="dashboard" />

            <div className="main-dashboard">
                <Header activeTabs={activeTabs}
                    setActiveTabs={setActiveTabs} />
                <NavigatedSection activeTabs={activeTabs} />
                <Destination activeTabs={activeTabs} />
                <FooterNavigation />
            </div>
        </div>
    </>
}

export default Dashboard