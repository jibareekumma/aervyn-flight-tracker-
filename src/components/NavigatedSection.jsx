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
                            <option value="ABJ">Abidjan (ABJ)</option>
<option value="AUH">Abu Dhabi (AUH)</option>
<option value="ABV">Abuja (ABV)</option>
<option value="ACC">Accra (ACC)</option>
<option value="ADD">Addis Ababa (ADD)</option>
<option value="ALG">Algiers (ALG)</option>
<option value="AMM">Amman (AMM)</option>
<option value="AMS">Amsterdam (AMS)</option>
<option value="ATH">Athens (ATH)</option>
<option value="ATL">Atlanta (ATL)</option>
<option value="AKL">Auckland (AKL)</option>
<option value="BKK">Bangkok (BKK)</option>
<option value="BCN">Barcelona (BCN)</option>
<option value="PEK">Beijing (PEK)</option>
<option value="BEY">Beirut (BEY)</option>
<option value="BLR">Bengaluru (BLR)</option>
<option value="BOG">Bogota (BOG)</option>
<option value="BOS">Boston (BOS)</option>
<option value="BNE">Brisbane (BNE)</option>
<option value="BRU">Brussels (BRU)</option>
<option value="EZE">Buenos Aires (EZE)</option>
<option value="CAI">Cairo (CAI)</option>
<option value="CPT">Cape Town (CPT)</option>
<option value="CMN">Casablanca (CMN)</option>
<option value="MAA">Chennai (MAA)</option>
<option value="ORD">Chicago (ORD)</option>
<option value="CMB">Colombo (CMB)</option>
<option value="CPH">Copenhagen (CPH)</option>
<option value="DKR">Dakar (DKR)</option>
<option value="DFW">Dallas (DFW)</option>
<option value="DAC">Dhaka (DAC)</option>
<option value="DOH">Doha (DOH)</option>
<option value="DXB">Dubai (DXB)</option>
<option value="DUB">Dublin (DUB)</option>
<option value="FRA">Frankfurt (FRA)</option>
<option value="CAN">Guangzhou (CAN)</option>
<option value="HAN">Hanoi (HAN)</option>
<option value="HEL">Helsinki (HEL)</option>
<option value="SGN">Ho Chi Minh City (SGN)</option>
<option value="HKG">Hong Kong (HKG)</option>
<option value="ISB">Islamabad (ISB)</option>
<option value="IST">Istanbul (IST)</option>
<option value="CGK">Jakarta (CGK)</option>
<option value="JED">Jeddah (JED)</option>
<option value="JNB">Johannesburg (JNB)</option>
<option value="KHI">Karachi (KHI)</option>
<option value="KTM">Kathmandu (KTM)</option>
<option value="CCU">Kolkata (CCU)</option>
<option value="KUL">Kuala Lumpur (KUL)</option>
<option value="KWI">Kuwait City (KWI)</option>
<option value="LOS">Lagos (LOS)</option>
<option value="LHE">Lahore (LHE)</option>
<option value="LIM">Lima (LIM)</option>
<option value="LIS">Lisbon (LIS)</option>
<option value="LGW">London (LGW)</option>
<option value="LHR">London (LHR)</option>
<option value="LAX">Los Angeles (LAX)</option>
<option value="LUN">Lusaka (LUN)</option>
<option value="MAD">Madrid (MAD)</option>
<option value="BAH">Manama (BAH)</option>
<option value="MAN">Manchester (MAN)</option>
<option value="MNL">Manila (MNL)</option>
<option value="MEL">Melbourne (MEL)</option>
<option value="MEX">Mexico City (MEX)</option>
<option value="MIA">Miami (MIA)</option>
<option value="MXP">Milan (MXP)</option>
<option value="YUL">Montreal (YUL)</option>
<option value="SVO">Moscow (SVO)</option>
<option value="BOM">Mumbai (BOM)</option>
<option value="MUC">Munich (MUC)</option>
<option value="MCT">Muscat (MCT)</option>
<option value="NBO">Nairobi (NBO)</option>
<option value="DEL">New Delhi (DEL)</option>
<option value="JFK">New York (JFK)</option>
<option value="EWR">Newark (EWR)</option>
<option value="KIX">Osaka (KIX)</option>
<option value="OSL">Oslo (OSL)</option>
<option value="PTY">Panama City (PTY)</option>
<option value="CDG">Paris (CDG)</option>
<option value="ORY">Paris (ORY)</option>
<option value="PER">Perth (PER)</option>
<option value="PHC">Port Harcourt (PHC)</option>
<option value="REK">Reykjavik (REK)</option>
<option value="GIG">Rio de Janeiro (GIG)</option>
<option value="RUH">Riyadh (RUH)</option>
<option value="FCO">Rome (FCO)</option>
<option value="SFO">San Francisco (SFO)</option>
<option value="SCL">Santiago (SCL)</option>
<option value="GRU">Sao Paulo (GRU)</option>
<option value="ICN">Seoul (ICN)</option>
<option value="PVG">Shanghai (PVG)</option>
<option value="SIN">Singapore (SIN)</option>
<option value="ARN">Stockholm (ARN)</option>
<option value="SYD">Sydney (SYD)</option>
<option value="TPE">Taipei (TPE)</option>
<option value="TLV">Tel Aviv (TLV)</option>
<option value="HND">Tokyo (HND)</option>
<option value="NRT">Tokyo (NRT)</option>
<option value="YYZ">Toronto (YYZ)</option>
<option value="TUN">Tunis (TUN)</option>
<option value="YVR">Vancouver (YVR)</option>
<option value="VIE">Vienna (VIE)</option>
<option value="WAW">Warsaw (WAW)</option>
<option value="IAD">Washington D.C. (IAD)</option>
<option value="ZRH">Zurich (ZRH)</option>
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
                           <option value="ABJ">Abidjan (ABJ)</option>
<option value="AUH">Abu Dhabi (AUH)</option>
<option value="ABV">Abuja (ABV)</option>
<option value="ACC">Accra (ACC)</option>
<option value="ADD">Addis Ababa (ADD)</option>
<option value="ALG">Algiers (ALG)</option>
<option value="AMM">Amman (AMM)</option>
<option value="AMS">Amsterdam (AMS)</option>
<option value="ATH">Athens (ATH)</option>
<option value="ATL">Atlanta (ATL)</option>
<option value="AKL">Auckland (AKL)</option>
<option value="BKK">Bangkok (BKK)</option>
<option value="BCN">Barcelona (BCN)</option>
<option value="PEK">Beijing (PEK)</option>
<option value="BEY">Beirut (BEY)</option>
<option value="BLR">Bengaluru (BLR)</option>
<option value="BOG">Bogota (BOG)</option>
<option value="BOS">Boston (BOS)</option>
<option value="BNE">Brisbane (BNE)</option>
<option value="BRU">Brussels (BRU)</option>
<option value="EZE">Buenos Aires (EZE)</option>
<option value="CAI">Cairo (CAI)</option>
<option value="CPT">Cape Town (CPT)</option>
<option value="CMN">Casablanca (CMN)</option>
<option value="MAA">Chennai (MAA)</option>
<option value="ORD">Chicago (ORD)</option>
<option value="CMB">Colombo (CMB)</option>
<option value="CPH">Copenhagen (CPH)</option>
<option value="DKR">Dakar (DKR)</option>
<option value="DFW">Dallas (DFW)</option>
<option value="DAC">Dhaka (DAC)</option>
<option value="DOH">Doha (DOH)</option>
<option value="DXB">Dubai (DXB)</option>
<option value="DUB">Dublin (DUB)</option>
<option value="FRA">Frankfurt (FRA)</option>
<option value="CAN">Guangzhou (CAN)</option>
<option value="HAN">Hanoi (HAN)</option>
<option value="HEL">Helsinki (HEL)</option>
<option value="SGN">Ho Chi Minh City (SGN)</option>
<option value="HKG">Hong Kong (HKG)</option>
<option value="ISB">Islamabad (ISB)</option>
<option value="IST">Istanbul (IST)</option>
<option value="CGK">Jakarta (CGK)</option>
<option value="JED">Jeddah (JED)</option>
<option value="JNB">Johannesburg (JNB)</option>
<option value="KHI">Karachi (KHI)</option>
<option value="KTM">Kathmandu (KTM)</option>
<option value="CCU">Kolkata (CCU)</option>
<option value="KUL">Kuala Lumpur (KUL)</option>
<option value="KWI">Kuwait City (KWI)</option>
<option value="LOS">Lagos (LOS)</option>
<option value="LHE">Lahore (LHE)</option>
<option value="LIM">Lima (LIM)</option>
<option value="LIS">Lisbon (LIS)</option>
<option value="LGW">London (LGW)</option>
<option value="LHR">London (LHR)</option>
<option value="LAX">Los Angeles (LAX)</option>
<option value="LUN">Lusaka (LUN)</option>
<option value="MAD">Madrid (MAD)</option>
<option value="BAH">Manama (BAH)</option>
<option value="MAN">Manchester (MAN)</option>
<option value="MNL">Manila (MNL)</option>
<option value="MEL">Melbourne (MEL)</option>
<option value="MEX">Mexico City (MEX)</option>
<option value="MIA">Miami (MIA)</option>
<option value="MXP">Milan (MXP)</option>
<option value="YUL">Montreal (YUL)</option>
<option value="SVO">Moscow (SVO)</option>
<option value="BOM">Mumbai (BOM)</option>
<option value="MUC">Munich (MUC)</option>
<option value="MCT">Muscat (MCT)</option>
<option value="NBO">Nairobi (NBO)</option>
<option value="DEL">New Delhi (DEL)</option>
<option value="JFK">New York (JFK)</option>
<option value="EWR">Newark (EWR)</option>
<option value="KIX">Osaka (KIX)</option>
<option value="OSL">Oslo (OSL)</option>
<option value="PTY">Panama City (PTY)</option>
<option value="CDG">Paris (CDG)</option>
<option value="ORY">Paris (ORY)</option>
<option value="PER">Perth (PER)</option>
<option value="PHC">Port Harcourt (PHC)</option>
<option value="REK">Reykjavik (REK)</option>
<option value="GIG">Rio de Janeiro (GIG)</option>
<option value="RUH">Riyadh (RUH)</option>
<option value="FCO">Rome (FCO)</option>
<option value="SFO">San Francisco (SFO)</option>
<option value="SCL">Santiago (SCL)</option>
<option value="GRU">Sao Paulo (GRU)</option>
<option value="ICN">Seoul (ICN)</option>
<option value="PVG">Shanghai (PVG)</option>
<option value="SIN">Singapore (SIN)</option>
<option value="ARN">Stockholm (ARN)</option>
<option value="SYD">Sydney (SYD)</option>
<option value="TPE">Taipei (TPE)</option>
<option value="TLV">Tel Aviv (TLV)</option>
<option value="HND">Tokyo (HND)</option>
<option value="NRT">Tokyo (NRT)</option>
<option value="YYZ">Toronto (YYZ)</option>
<option value="TUN">Tunis (TUN)</option>
<option value="YVR">Vancouver (YVR)</option>
<option value="VIE">Vienna (VIE)</option>
<option value="WAW">Warsaw (WAW)</option>
<option value="IAD">Washington D.C. (IAD)</option>
<option value="ZRH">Zurich (ZRH)</option>
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
