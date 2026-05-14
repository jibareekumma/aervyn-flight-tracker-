

import downloadIcon from "/icons/download_icon.png"
import planeIcon from "/icons/plane_icon.png"
import profileIcon from "/icons/profile_icon.png"
import folderIcon from "/icons/folder_icon.png"
import { useState } from 'react';
import '../css/Intro.css';
import { useNavigate } from 'react-router-dom'

const Intro = function () {
    const [openMenu, setOpenMenu] = useState(false);

    const navigate = useNavigate()

    return (
        <div className="body-container">

            <header>
                <img
                    src="/icons/main-icon.png"
                    alt="Company Logo"
                    loading="lazy"
                    className="logo-image"
                />

                <nav className="hamburger-menu">
                    <img
                        src="/icons/hamburger-icon.png"
                        alt="Hamburger icon"
                        loading="lazy"
                        onClick={() => setOpenMenu(true)}
                    />
                </nav>

                <nav className="desktop-nav">
                    <div className = 'nav-items'>
                    <a href="#features">Features</a>
                    <a href="#destinations">Destinations</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#about">About</a>
                    </div>
                    <button type="button" 
                    className="desktop-nav-cta">Get Started</button>
                </nav>
            </header>

            {openMenu && (
                <div className="menu-overlay" 
                onClick={() => setOpenMenu(false)}>
                    <div className="menu-drawer" 
                    onClick={(e) => e.stopPropagation()}>
                        <button
                            className="menu-close-btn"
                            onClick={() => setOpenMenu(false)}
                            aria-label="Close menu"
                        >
                            ✕
                        </button>
                        <ul className="menu-list">
                            <li><a href="#about" 
                            onClick={() => setOpenMenu(false)}>
                                About Us</a></li>
                            <li><a href="#signup" 
                            onClick={() => setOpenMenu(false)}>
                                Sign Up</a></li>
                            <li><a href="#login" 
                            onClick = {() => navigate('/login')}
                            onClick={() => setOpenMenu(false)}>
                                Log in</a></li>
                        </ul>
                    </div>
                </div>
            )}

            <main>
                <div className="intro-texts">
                    <h4>
                        Explore the world with <i>confidence</i>
                    </h4>
                    <p>Discover flights, compare prices and book your next adventure with ease</p>
                </div>

                <div className="intro-btns">
                    <button className="intro-button" id="get-started-btn" type="button">
                        Get Started
                    </button>
                    <button id = 'login-btn' type="button"> 
                        Log in</button>
                    
                </div>

                <div className="stats-bar">
                    <div className="stat-item">
                        <img src = {downloadIcon} 
                        alt="download icon" 
                        className = 'stat-image'
                        />
                        <div className = 'stat-texts'>
                        <span className="stat-number">10K+</span>
                        <span className="stat-label">Destinations</span>
                        </div>
                    </div>

                    <div className="stat-divider" />

                    <div className="stat-item">
                        <img src = {planeIcon} 
                        alt="plane icon" 
                        className = 'stat-image'
                        />
                        <div className = 'stat-texts'>
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Airlines</span>
                        </div>
                    </div>

                    <div className="stat-divider" />

                    <div className="stat-item">
                        <img src = {profileIcon} 
                        alt="profile icon" 
                        className = 'stat-image'
                        />
                        <div className = 'stat-texts'>
                        <span className="stat-number">2M+</span>
                        <span className="stat-label">Happy Travelers</span>
                        </div>
                    </div>

                    <div className="stat-divider" />

                    <div className="stat-item">
                        <img src = {folderIcon} 
                        alt="folder icon" 
                        className = 'stat-image'
                        />
                        <div className = 'stat-texts'>
                        <span className="stat-number">100%</span>
                        <span className="stat-label">Secure Booking</span>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default Intro;
