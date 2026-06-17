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
                        <button className="book-btn" title="Book Flight">
                            <p>Book Now</p>
                            <img src={rightArrow} alt="Right Arrow" loading="lazy" />
                        </button>
                    </div>
                    {/* ── END FOOTER ── */}


                </div>
            )}

        </div>

    </>
}

export default FlightDetails