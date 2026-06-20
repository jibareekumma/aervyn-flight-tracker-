import rotateIcon from "/icons/spin-rotate.png"
import "../css/Header.css"
import selectArrow from "/icons/select arrow.png"


import locationIcon from "/icons/location.png"
import gpsIcon from "/icons/gps.png"
import { useState } from "react"

import { useNavigate } from "react-router-dom"


const NavigatedSection = function( {activeTabs} ){

    const navigate = useNavigate();

    const [fromValue, setFromValue] = useState("LOS");
    const [toValue, setToValue] = useState("LHR");

    const handleSwap = function(){
        const tempFrom = fromValue

        setFromValue(toValue);
        setToValue(tempFrom)
    }

    const handleSearch = function(){
        navigate('/flightResult', { state: { fromCode: fromValue, toCode: toValue } })
    }

    return <>

    {activeTabs === "flights" && (
    <div id="navigated-section">
        <p>Where are you going today?</p>

        <div className="navigated-container">

            <div className="country-options">
                <div className="country-field">
                    {/* <span className="field-label">From</span> */}
                    <div style={{ position: "relative", 
                      display: "inline-block" }}>
                        <select
                            name="located-country"
                            id="located-country"
                            value = {fromValue}
                            onChange = {(e) => setFromValue(e.target.value)}
                            style={{ appearance: "none", 
                              WebkitAppearance: "none", paddingRight: "40px" }}
                        >
                            <option value="LOS">Lagos (LOS)</option>
                            <option value="LHR">London (LHR)</option>
                            <option value="DXB">Dubai (DXB)</option>
                            <option value="JFK">New York (JFK)</option>
                            <option value="SIN">Singapore (SIN)</option>
                            <option value="CDG">Paris (CDG)</option>
                            <option value="NBO">Nairobi (NBO)</option>
                            <option value="BOM">Mumbai (BOM)</option>
                            <option value="SYD">Sydney (SYD)</option>
                        </select>
                        <img
                            src={selectArrow}
                            alt="down arrow"
                            loading="lazy"
                            className="select-icon"
                            style={{
                                position: "absolute",
                                right: "10px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                pointerEvents: "none",
                            }}
                        />
                    </div>
                </div>

                <div className="arrow-container"
                onClick={handleSwap}
                >
                    <img src={rotateIcon} alt="Rotate Icon" loading="lazy" 
                    title="Switch Destinations" />
                </div>

                <div className="country-field">
                   
                   
                    <div style={{ position: "relative", display: "inline-block" }}>
                        <select
                            name="destination-country"
                            id="destination-country"
                            value = {toValue}
                            onChange = {(e) => setToValue(e.target.value)}
                            style={{ appearance: "none", 
                              WebkitAppearance: "none", paddingRight: "40px" }}
                        >
                            <option value="LOS">Lagos (LOS)</option>
                            <option value="LHR">London (LHR)</option>
                            <option value="DXB">Dubai (DXB)</option>
                            <option value="JFK">New York (JFK)</option>
                            <option value="SIN">Singapore (SIN)</option>
                            <option value="CDG">Paris (CDG)</option>
                            <option value="NBO">Nairobi (NBO)</option>
                            <option value="BOM">Mumbai (BOM)</option>
                            <option value="SYD">Sydney (SYD)</option>
                        </select>
                        <img
                            src={selectArrow}
                            alt="down arrow"
                            loading="lazy"
                            className="select-arrow select-icon"
                            style={{
                                position: "absolute",
                                right: "10px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                pointerEvents: "none"
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="date-options item-option">
                <div className="depart-date select-item item1">
                    <p>Depart</p>
                    <input type="date" />
                </div>
                <div className="return-date select-item item2">
                    <p>Return</p>
                    <input type="date" />
                </div>
            </div>

            <div className="trip-options item-option">
                <div className="trip-type type-item item1">
                    <p>Trip Type</p>
                    <div className="input-item" style={{ position: "relative", 
                      display: "inline-block" }}>
                        <select name="trip-type" className="select-item" id="trip-type"
                            style={{ appearance: "none", 
                            WebkitAppearance: "none" }}>
                            <option value="One-Way">One-Way</option>
                            <option value="Round-Trip">Round-Trip</option>
                            <option value="Multi-City">Multi-City</option>
                            <option value="Open-Jaw">Open-Jaw</option>
                        </select>
                        <img src={selectArrow} alt="down arrow" 
                        loading="lazy" className="select-icon"
                            style={{ position: "absolute", 
                              right: "10px", top: "50%", 
                              transform: "translateY(-50%)", 
                              pointerEvents: "none" }}
                        />
                    </div>
                </div>

                <div className="trip-class type-item item2">
                    <p>Class</p>
                    <div style={{ position: "relative", display: "flex" }}
                     className="input-item">
                        <select name="trip-class" 
                        className="select-item" id="trip-class"
                            style={{ appearance: "none", 
                            WebkitAppearance: "none" }}>
                            <option value="Economy">Economy</option>
                            <option value="Premium">Premium</option>
                            <option value="Business">Business</option>
                            <option value="First Class">First Class</option>
                        </select>
                        <img src={selectArrow} alt="down arrow" 
                        loading="lazy" 
                        className="select-icon"
                            style={{ position: "absolute", right: "10px", 
                              top: "50%", transform: "translateY(-50%)", 
                              pointerEvents: "none", 
                              width: "20px", height: "20px" }}
                        />
                    </div>
                </div>
            </div>

            <button className="search-btn"
            onClick = {handleSearch}
            >Search Flights</button>
        </div>
    </div> 
    )}


    {activeTabs === "hotels" && (
<div id="navigated-section">
    <p>Where are you staying?</p>

    <div className="navigated-container">

        <div className="country-options">
            
                <div style={{ position: "relative", 
                    display: "inline-block" }}>
                        
                        
                    <img
                        src={locationIcon}
                        alt="location icon"
                        loading="lazy"
                        className = 'location-icon'
                        style={{ position: "absolute", 
                            left: "0", top: "50%", 
                            transform: "translateY(-50%)", 
                            pointerEvents: "none" }}
                    />
                    
                    <div className="country-field">
                    <select
                        name="country-hotel"
                        id="country-hotel"
                        style={{ appearance: "none", 
                            WebkitAppearance: "none", paddingLeft: "28px", 
                            paddingRight: "40px" }}
                    >
                        <option value="UAE">Dubai, United Arab Emirates</option>
                        <option value="USA">New York (JFK)</option>
                        <option value="NIGERIA">Lagos (LOS)</option>
                    </select>
                </div>
            </div>

            <div className="arrow-container">
                <img src={gpsIcon} alt="GPS Icon" 
                loading="lazy" title="Use current location" />
            </div>
        </div>

        <div className="date-options item-option">
            <div className="check-in-date select-item item1">
                <p>Check-in</p>
                <input type="date" />
            </div>
            <div className="checkout-date select-item item2">
                <p>Check-out</p>
                <input type="date" />
            </div>
        </div>

        <div className="trip-options item-option">
            <div className="trip-type type-item item1">
                <p>Guests</p>
                <div className="input-item" style={{ position: "relative", 
                    display: "inline-block" }}>
                    <input type="text" placeholder="2 Guests, 1 Room" 
                    style={{ background: "transparent", border: "none", 
                    fontSize: "1.5rem", width: "100%" }} />
                </div>
            </div>

            <div className="trip-class type-item item2">
                <p>Filters</p>
                <div style={{ position: "relative", display: "flex" }} 
                className="input-item">
                    <select name="filter-preference" 
                    id="filter-preference"
                        style={{ appearance: "none", 
                        WebkitAppearance: "none" }}>
                        <option value="Select preference">Select preferences</option>
                        <option value="Single Room">Single Room</option>
                        <option value="Double Standards">Double Standards</option>
                        <option value="Deluxe Room">Deluxe Room</option>
                        <option value="Family Room">Family Room</option>
                        <option value="Executive Suites">Executive Suites</option>
                        <option value="Presidential Suites">Presidential Suites</option>
                    </select>
                    <img src={selectArrow} 
                    alt="down arrow" loading="lazy" 
                    className="select-icon"
                        style={{ position: "absolute", 
                            right: "10px", top: "50%", 
                            transform: "translateY(-50%)", 
                            pointerEvents: "none", width: "20px", 
                            height: "20px" }}
                    />
                </div>
            </div>
        </div>

        <button className="search-btn"
        onClick = {() => navigate('/hotelResult')}
        >Search Hotels</button>
    </div>
</div>
)}



{activeTabs === "cars" && (
<div id="navigated-section">
    <p>Where are you picking up?</p>

    <div className="navigated-container">

        <div className="country-options">
            <div className="country-field">
                <div style={{ position: "relative", 
                    display: "inline-block" }}>
                        
                    <img
                        src={locationIcon}
                        alt="location icon"
                        loading="lazy"
                        className = 'location-icon'
                        style={{ position: "absolute", 
                            left: "0", top: "50%", 
                            transform: "translateY(-50%)", pointerEvents: "none" }}
                    />
                    
                    <select
                        name="country-car"
                        id="country-car"
                        style={{ appearance: "none", 
                            WebkitAppearance: "none", paddingLeft: "28px", 
                            paddingRight: "40px" }}
                    >
                        <option value="USA">New York (JFK)</option>
                        <option value="NIGERIA">Lagos (LOS)</option>
                    </select>
                </div>
            </div>

            <div className="arrow-container">
                <img src={gpsIcon} alt="GPS Icon" loading="lazy" 
                title="Use current location" />
            </div>
        </div>

        <div className="date-options item-option">
            <div className="pick-up-date select-item item1">
                <p>Pick-up Date</p>
                <input type="date" />
            </div>
            <div className="car-return-date select-item item2">
                <p>Return Date</p>
                <input type="date" />
            </div>
        </div>

        <div className="trip-options item-option">
            <div className="trip-type type-item item1">
                <p>Car Type</p>
                <div className="input-item" style={{ position: "relative", 
                    display: "inline-block" }}>
                    <select name="car-type" id="car-type"
                        style={{ appearance: "none", 
                        WebkitAppearance: "none" }}>
                        <option value="All Cars">All Cars</option>
                        <option value="Economy">Economy</option>
                        <option value="SUV">SUV</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Electric">Electric</option>
                        <option value="Van">Van</option>
                    </select>
                    <img src={selectArrow} alt="down arrow" 
                    loading="lazy" className="select-icon"
                        style={{ position: "absolute", 
                            right: "10px", top: "50%", 
                            transform: "translateY(-50%)", 
                            pointerEvents: "none" }}
                    />
                </div>
            </div>

            <div className="trip-class type-item item2">
                <p>Drivers</p>
                <div style={{ position: "relative", display: "flex" }} 
                className="input-item">
                    <select name="drivers-select" id="drivers-select"
                        style={{ appearance: "none", 
                        WebkitAppearance: "none" }}>
                        <option value="1 Driver">1 Driver</option>
                        <option value="2 Drivers">2 Drivers</option>
                    </select>
                    <img src={selectArrow} alt="down arrow" 
                    loading="lazy" className="select-icon"
                        style={{ position: "absolute", 
                            right: "10px", top: "50%", 
                            transform: "translateY(-50%)", pointerEvents: "none", 
                            width: "20px", height: "20px" }}
                    />
                </div>
            </div>
        </div>

        <button className="search-btn"
        onClick = {() => navigate('/carResult')}
        >Search Cars</button>
    </div>
</div>
)}



</>
}



export default NavigatedSection
