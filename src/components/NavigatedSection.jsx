
import rotateIcon from "/icons/spin-rotate.png"
import "../css/Header.css"
import selectArrow from "/icons/select arrow.png"


import locationIcon from "/icons/location.png"
import gpsIcon from "/icons/gps.png"


const NavigatedSection = function( {activeTabs} ){

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
                            style={{ appearance: "none", 
                              WebkitAppearance: "none", paddingRight: "40px" }}
                        >
                            <option value="USA">New York (JFK)</option>
                            <option value="NIGERIA">Lagos (LOS)</option>
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

                <div className="arrow-container">
                    <img src={rotateIcon} alt="Rotate Icon" loading="lazy" 
                    title="Switch Destinations" />
                </div>

                <div className="country-field">
                    {/* <span className="field-label">To</span> */}
                    <div style={{ position: "relative", display: "inline-block" }}>
                        <select
                            name="destination-country"
                            id="destination-country"
                            style={{ appearance: "none", 
                              WebkitAppearance: "none", paddingRight: "40px" }}
                        >
                            <option value="NIGERIA">Los Angeles (LAX)</option>
                            <option value="USA">United States</option>
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
                            style={{ appearance: "none", WebkitAppearance: "none" }}>
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
                    <div style={{ position: "relative", display: "flex" }} className="input-item">
                        <select name="trip-class" className="select-item" id="trip-class"
                            style={{ appearance: "none", WebkitAppearance: "none" }}>
                            <option value="Economy">Economy</option>
                            <option value="Premium">Premium</option>
                            <option value="Business">Business</option>
                            <option value="First Class">First Class</option>
                        </select>
                        <img src={selectArrow} alt="down arrow" loading="lazy" className="select-icon"
                            style={{ position: "absolute", right: "10px", 
                              top: "50%", transform: "translateY(-50%)", 
                              pointerEvents: "none", 
                              width: "20px", height: "20px" }}
                        />
                    </div>
                </div>
            </div>

            <button className="search-btn">Search Flights</button>
        </div>
    </div> 
    )}


    {activeTabs === "hotels" && (
    <div id = 'hotels-navigated'>
       

        <div className = 'hotel-location'>
            <p>Where to?</p>
            <div>
                <div className = 'icon'>
                    <img src = {locationIcon} 
                    alt="icon for location" 
                     loading = 'lazy'/>
                </div>
                    <select name="country-hotel" 
                    id="country-hotel">
                        <option value="USA">New York (JFK)</option>
                        <option value="NIGERIA">Lagos (LOS)</option>
                    </select>
                <div className = 'icon-two'>
                    <img src = {gpsIcon} 
                    alt="Icon for GPS" loading = "lazy" />
                </div>
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


        <div className="guest-option item-option">
                <div className="guest-input select-item item1">
                    <p>Guests</p>
                    <input type="text" 
                    placeholder = "2 Guest, 1 Room" />
                </div>
                <div className="filter-input select-item item2">
                    <p>Filters</p>
                    <select name="filter-preference" 
                    id="filter-preference">
                        <option value="Select preference">Select preference</option>
                        <option value="Single Room">Single Room</option>
                        <option value="Double Standards">Double Standards</option>
                        <option value="Deluxe Room">Deluxe Room</option>
                        <option value="Family Room">Family Room</option>
                        <option value="Executive Suites">Executive Suites</option>
                        <option value="Presidential Suites">Presidential Suites</option>
                    </select>
                </div>
            </div>

            <button className="search-btn">Search Hotels</button>
        
    </div>
    )}


    {activeTabs === "cars" && (
    <div id = 'cars-navigated'>
        

        <div className = 'car-location'>
            <p>Pick-up Location</p>
            <div>
                <div className = 'icon'>
                    <img src = {locationIcon} 
                    alt="icon for location" 
                     loading = 'lazy'/>
                </div>
                    <select name="country-hotel" 
                    id="country-hotel">
                        <option value="USA">New York (JFK)</option>
                        <option value="NIGERIA">Lagos (LOS)</option>
                    </select>
                <div className = 'icon-two'>
                    <img src = {gpsIcon} 
                    alt="Icon for GPS" loading = "lazy" />
                </div>
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


        <div className="guest-option item-option">
                <div className="guest-input select-item item1">
                    <p>Guests</p>
                    <select name="car-type" 
                    id="car-type">
                        <option value="All Cars">All Cars</option>
                        <option value="Economy">Economy</option>
                        <option value="SUV">SUV</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Electric">Electric</option>
                        <option value="Van">Van</option>
                    </select>
                </div>
                <div className="filter-input select-item item2">
                    <p>Drivers</p>
                    <select name="drivers-select" 
                    id="drivers-select">
                        <option value="1 Driver">1 Driver</option>
                        <option value="2 Drivers">2 Drivers</option>
                        
                    </select>
                </div>
            </div>

            <button className="search-btn">Search Cars</button>

    </div>
    )}



</>
}



export default NavigatedSection