


import emiratesLogo from "/photos/emirates_logo.jpeg"
import britishAirways from "/photos/british_airways.jpeg"
import turkishLogo from "/photos/turkish_logo.jpeg"

import favoriteIcon from "/icons/favorite_icon.png"
import shareIcon from "/icons/share_icon.png"
import spinRotate from "/icons/spin-rotate.png"
import seatIcon from "/icons/seat_icon.png"
import rightArrow from "/icons/right_arr.png"

import "../../css/FlightDetail.css"
import { useEffect } from "react"

const FlightDetails = function ({ isOpen, onClose, selectedFlight, sheetClose }) {

    useEffect(() => {
        if (selectedFlight) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [selectedFlight])

    return <>

        <div className={`overlay ${isOpen ? 'overlay--active' : ''}`}
            onClick={() => {
                onClose()
                sheetClose()
            }}
        />

        <div className={`bottom-sheet ${selectedFlight ? 'bottom-sheet--active' : ''}`}>

            {selectedFlight && (
                <div className='details-wrapper'>

                    {/* ── HEADER ── airline logo, name, code, icons */}
                    <div className='details-header'>
                        <div className='header'>
                            <img src={selectedFlight.logo}
                                alt="Airline Logo" loading="lazy" />
                                <div className="text">
                            <h5>{selectedFlight.name}</h5>
                            <p>{selectedFlight.code}</p>
                            </div>
                        </div>
                        <div className='icons-container'>
                            <div className="icon-item" title="Add to favorites">
                                <img src={favoriteIcon} alt="Favourite Icon" loading="lazy"
                                className="bottom-sheet-icon"
                                />
                            </div>
                            <div className="icon-item" title="Share Flight">
                                <img src={shareIcon} alt="Share Icon" loading="lazy" 
                                className="bottom-sheet-icon"
                                />
                            </div>
                        </div>
                    </div>
                    {/* ── END HEADER ── */}


                    {/* ── PRICE ── price per person + CO2 weight */}
                    <div className="details-price">
                        <div className='price'>
                            <h4>{selectedFlight.price}</h4>
                            <p>per person</p>
                        </div>
                        <div className="weights">
                            <div className="average">
                                <img src={spinRotate} alt="rotate icon" />
                                <p>Below Average</p>
                            </div>
                            <p className = 'weight-p'>{selectedFlight.weight} CO<sub>2</sub></p>
                        </div>
                    </div>
                    {/* ── END PRICE ── */}


                    {/* ── FLIGHT TIMELINE ── route line with stops */}
                    <div className="flightTimeline">
                        <div className="flightTimeline__route">
                            <div className="flightTimeline__airport flightTimeline__airport--left">
                                <h3>LOS</h3>
                                <span>Lagos</span>
                            </div>

                            <div className="flightTimeline__lineWrapper">
                                <div className="flightTimeline__top">
                                    <span className="flightTimeline__duration">7h 30m</span>
                                    <span className="flightTimeline__stopLabel">IST</span>
                                    <span className="flightTimeline__duration">3h 30m</span>
                                </div>
                                <div className="flightTimeline__line">
                                    <span className="flightTimeline__dot"></span>
                                    <span className="flightTimeline__stop"></span>
                                    <span className="flightTimeline__dot"></span>
                                </div>
                                <div className="flightTimeline__bottom">
                                    <span>1 Stop • 11h 20m</span>
                                </div>
                            </div>

                            <div className="flightTimeline__airport flightTimeline__airport--right">
                                <h3>LHR</h3>
                                <span>London</span>
                            </div>
                        </div>

                        <div className="flightTimeline__times">
                            <span>08:30</span>
                            <span>20:10</span>
                        </div>
                    </div>
                    {/* ── END FLIGHT TIMELINE ── */}


                    {/* ── FLIGHT DETAILS CARD ── departure, stops, layover, arrival */}
                    <div className="flightDetailsCard">
                        <div className="flightDetailsCard__header">
                            <h3>Flight Details</h3>
                            <button className="flightDetailsCard__close">×</button>
                        </div>

                        <div className="flightDetailsCard__timeline">

                            <div className="flightDetailsCard__row">
                                <div className="flightDetailsCard__track">
                                    <span className="flightDetailsCard__plane">✈</span>
                                </div>
                                <div className="flightDetailsCard__content">
                                    <h4>LOS</h4>
                                    <p>Lagos | Lagos (LOS)</p>
                                    <span>Thu, Jul 4, 2025</span>
                                </div>
                                <button className="flightDetailsCard__action">Book</button>
                            </div>

                            <div className="flightDetailsCard__row">
                                <div className="flightDetailsCard__track">
                                    <span className="flightDetailsCard__circle"></span>
                                </div>
                                <div className="flightDetailsCard__content">
                                    <h5>Istanbul (IST)</h5>
                                    <span>Thu, Jul 4, 2025</span>
                                    <p>Istanbul — Arrival</p>
                                </div>
                                <button className="flightDetailsCard__action">Book</button>
                            </div>

                            <div className="flightDetailsCard__row">
                                <div className="flightDetailsCard__track">
                                    <span className="flightDetailsCard__circle"></span>
                                </div>
                                <div className="flightDetailsCard__content">
                                    <h5>Istanbul (IST)</h5>
                                    <span>Thu, Jul 4, 2025</span>
                                    <p>Istanbul — Arrival</p>
                                </div>
                                <button className="flightDetailsCard__action">Book</button>
                            </div>

                            <div className="flightDetailsCard__layover">
                                Layover 1h 10m
                            </div>

                            <div className="flightDetailsCard__row">
                                <div className="flightDetailsCard__track">
                                    <span className="flightDetailsCard__circle"></span>
                                </div>
                                <div className="flightDetailsCard__content">
                                    <h5>Istanbul (IST)</h5>
                                    <span>Thu, Jul 4, 2025</span>
                                    <p>Istanbul — Arrival</p>
                                </div>
                                <div className="flightDetailsCard__duration">7h 30m</div>
                            </div>

                            <div className="flightDetailsCard__row">
                                <div className="flightDetailsCard__track">
                                    <span className="flightDetailsCard__plane flightDetailsCard__plane--arrival">✈</span>
                                </div>
                                <div className="flightDetailsCard__content">
                                    <h4>LHR</h4>
                                    <p>London (LHR)</p>
                                    <span>Fri, Jul 5, 2025</span>
                                    <small>Heathrow — Terminal 3</small>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* ── END FLIGHT DETAILS CARD ── */}


                    {/* ── CLASS DETAILS ── seat, cabin class */}
                    <div className='class-details'>
                        <div className='details-icon'>
                            <img src={seatIcon} alt="passenger seat" loading="lazy" />
                        </div>
                        <div className="details-text">
                            <h5>Cabin class</h5>
                            <div className = 'texts'>
                            <p>Economy</p>
                            <span>.</span>
                            <i>Saver</i>
                            </div>
                        </div>
                    </div>
                    {/* ── END CLASS DETAILS ── */}


                    {/* ── VENDORS ── available booking options */}
                    <div className="details-vendor">
                        <h4>Available Vendors</h4>
                        <div className="container">
                            <div className="item">
                                <div className="airline">
                                    <img src={selectedFlight.logo}
                                        alt="Airline Logo" loading="lazy" />
                                    <h6>{selectedFlight.name}</h6>
                                    <span>Best Price</span>
                                </div>
                                <div className="cta">
                                    <p>{selectedFlight.price}</p>
                                    <button>Book</button>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="item">
                                <div className="airline">
                                    <img src={selectedFlight.logo}
                                        alt="Airline Logo" loading="lazy" />
                                    <h6>{selectedFlight.name}</h6>
                                    <span>Best Price</span>
                                </div>
                                <div className="cta">
                                    <p>{selectedFlight.price}</p>
                                    <button>Book</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ── END VENDORS ── */}


                    {/* ── FOOTER ── favorite, share, book now */}
                    <div className="details-footer">
                        <div className="favorite">
                            <img src={favoriteIcon} alt="Favorite Icon"
                                loading="lazy" title="Add to favorite" />
                        </div>
                        <div className="share">
                            <img src={shareIcon} alt="Share Icon"
                                loading="lazy" title="Share with friends" />
                        </div>
                        <button className="book-btn" 
                        title="Book Now">
                            <p>Book Now</p>
                            <img src={rightArrow} alt="Right Arrow" loading="lazy" />
                        </button>
                    </div>
                    {/* ── END FOOTER ── */}


                </div>
            )}

        </div>


        <div className={`modal-window ${selectedFlight ? 
    'modal-window--active' : ''}`}>

    {selectedFlight && (
        <div className='modal-wrapper'>

            {/* ── TOP ── airline logo, name, verified badge, favorite/share icons */}
            <div className='modal-top'>
                <div className='modal-top-left'>
                    <img src={selectedFlight.logo}
                        alt="Airline Logo" loading="lazy" />
                    <div className="text">
                        <h5>{selectedFlight.name}</h5>
                        <p>✓ Airline Verified</p>
                    </div>
                </div>
                <div className='modal-top-right'>
                    <div className="icon-item" title="Add to favorites">
                        <img src={favoriteIcon} alt="Favourite Icon" loading="lazy" />
                    </div>
                    <div className="icon-item" title="Share Flight">
                        <img src={shareIcon} alt="Share Icon" loading="lazy" />
                    </div>
                </div>
            </div>
            {/* ── END TOP ── */}


            {/* ── ROUTE ── LOS - IST - LHR row */}
            <div className='modal-route'>
                <div className='route-point'>
                    <h3>{selectedFlight.departTime || '08:30'}</h3>
                    <h4>LOS</h4>
                    <p>Lagos</p>
                    <small>Murtala Muhammed Intl</small>
                    <small>12 Jul, 2025</small>
                    <small>Terminal 1</small>
                </div>

                <div className='route-line'>
                    <span className='duration-top'>5h 10m</span>
                    <div className='line-track'>
                        <span className='dot'></span>
                        <span className='stop-pill'>IST</span>
                        <span className='dot'></span>
                    </div>
                </div>

                <div className='route-point route-point--right'>
                    <div className='time-row'>
                        <h3>{selectedFlight.arriveTime || '20:10'}</h3>
                        <span className='next-day'>+1 day</span>
                    </div>
                    <h4>LHR</h4>
                    <p>London</p>
                    <small>Heathrow</small>
                    <small>13 Jul, 2025</small>
                    <small>Terminal 3</small>
                </div>
            </div>
            {/* ── END ROUTE ── */}


            {/* ── META ROW ── duration, stops, cabin class */}
            <div className='modal-meta'>
                <div className='meta-item'>
                    <img src={spinRotate} alt="duration icon" />
                    <div className="text">
                        <p>Total Duration</p>
                        <h6>11h 40m</h6>
                    </div>
                </div>
                <div className='meta-divider'></div>
                <div className='meta-item'>
                    <img src={spinRotate} alt="stops icon" />
                    <div className="text">
                        <p>Stops</p>
                        <h6>1 Stop (IST)</h6>
                    </div>
                </div>
                <div className='meta-divider'></div>
                <div className='meta-item'>
                    <img src={seatIcon} alt="cabin class icon" />
                    <div className="text">
                        <p>Cabin Class</p>
                        <h6>Economy · Saver</h6>
                    </div>
                </div>
            </div>
            {/* ── END META ROW ── */}


            {/* ── BODY ── flight legs on left, price/emissions/vendors on right */}
            <div className='modal-body'>

                {/* ── FLIGHT LEGS ── */}
                <div className='modal-legs'>
                    <h4>Flight Legs</h4>

                    <div className='leg-item'>
                        <span className='leg-dot'></span>
                        <div className='leg-content'>
                            <div className='leg-code-row'>
                                <p className='leg-code'>{selectedFlight.name}</p>
                                <span className='leg-flight-no'>TK 622</span>
                            </div>
                            <div className='leg-route'>
                                <div className='leg-airport'>
                                    <h5>LOS</h5>
                                    <p>Lagos</p>
                                </div>
                                <span className='leg-duration'>7h 30m</span>
                                <div className='leg-airport'>
                                    <h5>IST</h5>
                                    <p>Istanbul</p>
                                </div>
                            </div>
                            <div className='leg-times'>
                                <span>08:30</span>
                                <span>16:00</span>
                            </div>
                            <p className='leg-terminal'>Terminal 1</p>
                        </div>
                    </div>

                    <div className='leg-layover'>
                        Layover in Istanbul (IST) · 1h 10m
                    </div>

                    <div className='leg-item'>
                        <span className='leg-dot'></span>
                        <div className='leg-content'>
                            <div className='leg-code-row'>
                                <p className='leg-code'>{selectedFlight.name}</p>
                                <span className='leg-flight-no'>TK 1981</span>
                            </div>
                            <div className='leg-route'>
                                <div className='leg-airport'>
                                    <h5>IST</h5>
                                    <p>Istanbul</p>
                                </div>
                                <span className='leg-duration'>3h 50m</span>
                                <div className='leg-airport'>
                                    <h5>LHR</h5>
                                    <p>London</p>
                                </div>
                            </div>
                            <div className='leg-times'>
                                <span>17:10</span>
                                <span>20:10</span>
                            </div>
                            <p className='leg-terminal'>Terminal 4</p>
                        </div>
                    </div>
                </div>
                {/* ── END FLIGHT LEGS ── */}


                {/* ── SIDE ── price, CO2, vendors */}
                <div className='modal-side'>

                    <div className='side-card'>
                        <p>Price (per person)</p>
                        <h3>{selectedFlight.price}</h3>
                    </div>

                    <div className='side-card'>
                        <div className='emissions-row'>
                            <p>CO<sub>2</sub> Emissions</p>
                            <span className='below-average'>Below Average</span>
                        </div>
                        <h6>{selectedFlight.weight} CO<sub>2</sub></h6>
                        <span className='emissions-note'>13% below average</span>
                    </div>

                    <div className='side-card side-vendors'>
                        <h6>Available Vendors</h6>

                        <div className='vendor-item'>
                            <div className='vendor-left'>
                                <img src={selectedFlight.logo} alt="Vendor Logo" loading="lazy" />
                                <div className="text">
                                    <p>{selectedFlight.name}</p>
                                    <span>Best Price</span>
                                </div>
                            </div>
                            <div className='vendor-right'>
                                <p>{selectedFlight.price}</p>
                                <button>Book</button>
                            </div>
                        </div>

                        <div className='vendor-item'>
                            <div className='vendor-left'>
                                <div className="text">
                                    <p>eDreams</p>
                                </div>
                            </div>
                            <div className='vendor-right'>
                                <p>$505</p>
                                <button>Book</button>
                            </div>
                        </div>

                        <div className='vendor-item'>
                            <div className='vendor-left'>
                                <div className="text">
                                    <p>Trip.com</p>
                                </div>
                            </div>
                            <div className='vendor-right'>
                                <p>$502</p>
                                <button>Book</button>
                            </div>
                        </div>

                        <div className='vendor-item'>
                            <div className='vendor-left'>
                                <div className="text">
                                    <p>Expedia</p>
                                </div>
                            </div>
                            <div className='vendor-right'>
                                <p>$508</p>
                                <button>Book</button>
                            </div>
                        </div>

                        <a href="#" className='view-more'>View 6 
                            more options</a>
                    </div>

                </div>
                {/* ── END SIDE ── */}

            </div>
            {/* ── END BODY ── */}


            {/* ── FOOTER ── favorite, share, book now, disclaimer */}
            <div className="modal-footer">
                <div className='footer-top'>
                    <div className="favorite">
                        <img src={favoriteIcon} 
                        alt="Favorite Icon"
                            loading="lazy" title="Add to favorite" />
                        <p>Add to Favorites</p>
                    </div>
                    <div className="share">
                        <img src={shareIcon} alt="Share Icon"
                            loading="lazy" 
                            title="Share with friends" />
                        <p>Share Flight</p>
                    </div>
                    <button className="book-btn" 
                    title="Book Now">
                        <p>Book Now</p>
                        <img src={rightArrow} 
                        alt="Right Arrow" loading="lazy" />
                    </button>
                </div>
                <p className='disclaimer'>You will be 
                    redirected to the vendor's site to 
                    complete booking</p>
            </div>
            {/* ── END FOOTER ── */}

        </div>
    )}

</div>

    </>
}

export default FlightDetails