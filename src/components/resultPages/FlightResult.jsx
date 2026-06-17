

import dummyFlag from "/photos/usa_flag.png"
import emiratesLogo from "/photos/emirates_logo.jpeg"
import britishAirways from "/photos/british_airways.jpeg"
import turkishLogo from "/photos/turkish_logo.jpeg"


import favoriteIcon from "/icons/favorite_icon.png"
import leftArrow from "/icons/left_arrow_icon.png"
import rightArrow from "/icons/right_arr.png"
import selectArrow from "/icons/select arrow.png"
import twoSideArrow from "/icons/two_side_arrow.png"
import dotIcon from "/icons/dot_icon.png"
import rightArrowDsk from "/icons/right_arrow_dsk.png"
import leftArrowDsk from "/icons/left_arrow_dsk.png"

import homeIcon from "/icons/home_icon.png"
import searchIcon from "/icons/search_icon.png"
import profileIcon from "/icons/profile_icon 2.png"
import mainIcon from "/icons/main-icon.png"
import calendarIcon from "/icons/bell_icon.png"
import settingsIcon from "/icons/spin-rotate.png"


import FlightDetails from "./FlightDetails"

import { useNavigate } from "react-router-dom"
import { useState } from "react"


import "../../css/Result.css"

// import "../../css/Header.css"

const FlightResult = function () {

    const [showOverlay, setShowOverlay] = useState(false);

    // const [showBottomSheet, setShowBottomSheet] = useState(false)
    const [selectedFlight, setSelectedFlight] = useState(null)

    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    })

    const today2 = new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long'
    })

    const navigate = useNavigate()


    return <>

        <div className="result-container">


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



            <div className='result-header'
                id="flight-result-header">

                <section className='search-details'>
                    <div className='header-text-section'>
                        <div className="icon-container">
                            <img src={leftArrow}
                                alt="Arrow Towards left" loading="lazy"
                                onClick={() => navigate('/dashboard')}
                            />
                        </div>

                        <div className='text-container'>

                            <div className='locations'>
                                <h5>Lagos</h5>
                                <img src={rightArrow}
                                    alt="Arrow Towards right" loading="lazy"

                                />
                                <h5>London</h5>
                            </div>

                            <div className="dates">
                                <p>{today}</p>
                                <span>.</span>
                                <p>1 Adult</p>
                                <span>.</span>
                                <p>Economy</p>
                            </div>

                        </div>
                    </div>

                    <button className="header-btn">
                        Edit Search
                    </button>
                </section>


                <nav className="result-nav">
                    <div className="nav-item">
                        <p>Best</p>
                        <img src={selectArrow}
                            alt="Arrow select"
                            loading="lazy"
                        />
                    </div>

                    <div className="nav-item">
                        <p>Price</p>
                        <img src={selectArrow}
                            alt="Arrow select"
                            loading="lazy"
                        />
                    </div>

                    <div className="nav-item">
                        <p>Shops</p>
                        <img src={selectArrow}
                            alt="Arrow select"
                            loading="lazy"
                        />
                    </div>

                    <div className="nav-item">
                        <p>Airlines</p>
                        <img src={selectArrow}
                            alt="Arrow select"
                            loading="lazy"
                        />
                    </div>
                </nav>
            </div>


            <div className='result-main'>
                <h6>20 Flights Found</h6>

                <section className='details-container'>

                    <div className='details-item'
                    onClick = {() => {
                        setShowOverlay(true)
                        setSelectedFlight({
                        logo: britishAirways,
                        name: 'British Airways',
                        code: 'BA 075',
                        price: '$420',
                        weight: '267 kg'
                        })
                    }}
                    
                    
                    >
                        <div className="airline-name">
                            <img src={britishAirways}
                                alt="Country Flag" loading="lazy" />
                            <p>Bristish Airways</p>
                        </div>
                        <div className="time-details">
                            <div className='one'>
                                <h5>08:30</h5>
                                <p>LOS</p>
                            </div>
                            <div className='two'>
                                <p>7h 40m</p>
                                <img src={twoSideArrow}
                                    alt="Two side arrow" />
                                <p>Direct</p>
                            </div>
                            <div className='one'>
                                <h5>15:15</h5>
                                <p>LHR</p>
                            </div>
                        </div>
                        {/* Desktop */}
                        <div className="time-details-dsk">

                            <div className='one'>
                                <h5>08:30</h5>
                                <p>LOS</p>
                                <h6>{today2}</h6>
                            </div>

                            <div className='two'>
                                <img src = {leftArrowDsk} 
                                alt="Arrow Icon"  loading="lazy"/>
                                <div>
                                    <p>7h 40m</p>
                                    <p>Direct</p>
                                </div>
                                <img src={rightArrowDsk} 
                                alt="Arrow icon" loading = "lazy" />
                                </div>


                                <div className='one'>
                                <h5>15:15</h5>
                                <p>LHR</p>
                                <h6>{today2}</h6>
                            
                            </div>
                        </div>

                        <div className='price-detail'>
                            <div className='price-detail-item'>
                                <h4>$420</h4>
                                <p>/person</p>
                                
                            </div>
                            <img src={favoriteIcon}
                                alt="Add to favorite" title="Add to favorite"
                                loading="lazy"
                            />
                        </div>
                    </div>


                    <div className='details-item'
                    onClick = {() => {
                        setShowOverlay(true)
                        setSelectedFlight({
                        logo: emiratesLogo,
                        name: 'Emirates',
                        code: 'EK 101',
                        price: '$395',
                        weight: '312 kg'
                        })
                    }}
                    >
                        <div className="airline-name">
                            <img src={emiratesLogo}
                                alt="Country Flag" loading="lazy" />
                            <p>Emirates</p>
                        </div>
                        <div className="time-details">
                            <div className='one'>
                                <h5>09:15</h5>
                                <p>LOS</p>
                            </div>
                            <div className='two'>
                                <p>9h 10m</p>
                                <img src={twoSideArrow}
                                    alt="Two side arrow" />
                                <p>1 Stop</p>
                            </div>
                            <div className='one'>
                                <h5>18:00</h5>
                                <p>LHR</p>
                            </div>
                        </div>

                        {/* Desktop */}
                        <div className="time-details-dsk">

                            <div className='one'>
                                <h5>08:30</h5>
                                <p>LOS</p>
                                <h6>{today2}</h6>
                            </div>

                            <div className='two'>
                                <img src = {leftArrowDsk} 
                                alt="Arrow Icon"  loading="lazy"/>
                                <div>
                                    <p>7h 40m</p>
                                    <p>Direct</p>
                                </div>
                                <img src={rightArrowDsk} 
                                alt="Arrow icon" loading = "lazy" />
                                </div>


                                <div className='one'>
                                <h5>15:15</h5>
                                <p>LHR</p>
                                <h6>{today2}</h6>
                            
                            </div>
                        </div>


                        <div className='price-detail'>
                            <div className='price-detail-item'>
                                <h4>$395</h4>
                                <p>/person</p>
                            </div>
                            <img src={favoriteIcon}
                                alt="Add to favorite" title="Add to favorite"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className='details-item'
                    onClick = {() => {
                        setShowOverlay(true)
                        setSelectedFlight({
                        logo: turkishLogo,
                        name: 'Turkish Airlinea',
                        code: 'TK 622 - TK 1981',
                        price: '$385',
                        weight: '195 kg'
                        })
                    }}
                    >
                        <div className="airline-name">
                            <img src={turkishLogo}
                                alt="Country Flag" loading="lazy" />
                            <p>Turkish Airlines</p>
                        </div>
                        <div className="time-details">
                            <div className='one'>
                                <h5>11:45</h5>
                                <p>LOS</p>
                            </div>
                            <div className='two'>
                                <p>10h 25m</p>
                                <img src={twoSideArrow}
                                    alt="Two side arrow" />
                                <p>1 Stop</p>
                            </div>
                            <div className='one'>
                                <h5>22:00</h5>
                                <p>LHR</p>
                            </div>
                        </div>

                        {/* Desktop */}
                        <div className="time-details-dsk">

                            <div className='one'>
                                <h5>08:30</h5>
                                <p>LOS</p>
                                <h6>{today2}</h6>
                            </div>

                            <div className='two'>
                                <img src = {leftArrowDsk} 
                                alt="Arrow Icon"  loading="lazy"/>
                                <div>
                                    <p>7h 40m</p>
                                    <p>Direct</p>
                                </div>
                                <img src={rightArrowDsk} 
                                alt="Arrow icon" loading = "lazy" />
                                </div>


                                <div className='one'>
                                <h5>15:15</h5>
                                <p>LHR</p>
                                <h6>{today2}</h6>
                            
                            </div>
                        </div>

                        
                        <div className='price-detail'>
                            <div className='price-detail-item'>
                                <h4>$385</h4>
                                <p>/person</p>
                            </div>
                            <img src={favoriteIcon}
                                alt="Add to favorite" title="Add to favorite"
                                loading="lazy"
                            />
                        </div>
                    </div>

                </section>



            </div>

        </div>

            <FlightDetails
            isOpen={showOverlay}
            onClose={() => setShowOverlay(false)}
            selectedFlight={selectedFlight}
            sheetClose={() => setSelectedFlight(null)} 
            />
    </>
}


export default FlightResult 