


import favoriteIcon from "/icons/favorite_icon.png"
import shareIcon from "/icons/share_icon.png"
import spinRotate from "/icons/spin-rotate.png"
import seatIcon from "/icons/seat_icon.png"
import rightArrow from "/icons/right_arr.png"

import "../../css/FlightDetail.css"
import { useEffect } from "react"

const FlightDetails = function ({
    isOpen,
    onClose,
    selectedFlight,
    sheetClose,
    logoErrors,
    onLogoError,
    getInitials,
    getAirlineColor
}) {

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

    const formatPrice = function (priceUSD) {
        return `$${priceUSD}`
    }

    const renderAirlineLogo = function (airlineCode, airlineName, sizeClass) {
        if (logoErrors[airlineCode]) {
            return (
                <div
                    className={`airline-logo-fallback ${sizeClass || ''}`}
                    style={{ backgroundColor: getAirlineColor(airlineCode) }}
                >
                    {getInitials(airlineName)}
                </div>
            )
        }
        return (
            <img
                src={`/airlines/${airlineCode.toLowerCase()}.png`}
                alt={airlineName}
                loading="lazy"
                className={sizeClass || ''}
                onError={() => onLogoError(airlineCode)}
            />
        )
    }

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
                            {renderAirlineLogo(selectedFlight.airlineCode, selectedFlight.airlineName)}
                            <div className="text">
                                <h5>{selectedFlight.airlineName}</h5>
                                <p>{selectedFlight.flightNumber}</p>
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

                    {/* ── PRICE ── price per person */}
                    <div className="details-price">
                        <div className='price'>
                            <h4>{formatPrice(selectedFlight.priceUSD)}</h4>
                            <p>per person</p>
                        </div>
                        <div className="weights">
                            <div className="average">
                                <img src={spinRotate} alt="rotate icon" />
                                <p>{selectedFlight.cabinClass}</p>
                            </div>
                            <p className='weight-p'>{selectedFlight.availableSeats} seats left</p>
                        </div>
                    </div>
                    {/* ── END PRICE ── */}

                    {/* ── FLIGHT TIMELINE ── direct route, no stops */}
                    <div className="flightTimeline">
                        <div className="flightTimeline__route">
                            <div className="flightTimeline__airport flightTimeline__airport--left">
                                <h3>{selectedFlight.originAirportCode}</h3>
                                <span>{selectedFlight.originCity}</span>
                            </div>

                            <div className="flightTimeline__lineWrapper">
                                <div className="flightTimeline__top">
                                    <span className="flightTimeline__duration">{selectedFlight.duration}</span>
                                </div>
                                <div className="flightTimeline__line">
                                    <span className="flightTimeline__dot"></span>
                                    <span className="flightTimeline__dot"></span>
                                </div>
                                <div className="flightTimeline__bottom">
                                    <span>Nonstop</span>
                                </div>
                            </div>

                            <div className="flightTimeline__airport flightTimeline__airport--right">
                                <h3>{selectedFlight.destinationAirportCode}</h3>
                                <span>{selectedFlight.destinationCity}</span>
                            </div>
                        </div>

                        <div className="flightTimeline__times">
                            <span>{selectedFlight.departureTime}</span>
                            <span>{selectedFlight.arrivalTime}</span>
                        </div>
                    </div>
                    {/* ── END FLIGHT TIMELINE ── */}

                    {/* ── FLIGHT DETAILS CARD ── departure, arrival */}
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
                                    <h4>{selectedFlight.originAirportCode}</h4>
                                    <p>{selectedFlight.originCity} | {selectedFlight.originAirport}</p>
                                    <span>{selectedFlight.departureDate} • {selectedFlight.departureTime}</span>
                                </div>
                                <button className="flightDetailsCard__action">Book</button>
                            </div>

                            <div className="flightDetailsCard__row">
                                <div className="flightDetailsCard__track">
                                    <span className="flightDetailsCard__plane flightDetailsCard__plane--arrival">✈</span>
                                </div>
                                <div className="flightDetailsCard__content">
                                    <h4>{selectedFlight.destinationAirportCode}</h4>
                                    <p>{selectedFlight.destinationCity} | {selectedFlight.destinationAirport}</p>
                                    <span>{selectedFlight.arrivalDate} • {selectedFlight.arrivalTime}</span>
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
                            <div className='texts'>
                                <p>{selectedFlight.cabinClass}</p>
                                <span>.</span>
                                <i>{selectedFlight.aircraft}</i>
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
                                    {renderAirlineLogo(selectedFlight.airlineCode, selectedFlight.airlineName)}
                                    <h6>{selectedFlight.airlineName}</h6>
                                    <span>Best Price</span>
                                </div>
                                <div className="cta">
                                    <p>{formatPrice(selectedFlight.priceUSD)}</p>
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
                            {renderAirlineLogo(selectedFlight.airlineCode, selectedFlight.airlineName)}
                            <div className="text">
                                <h5>{selectedFlight.airlineName}</h5>
                                <p>{selectedFlight.flightNumber}</p>
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

                    {/* ── ROUTE ── direct origin to destination */}
                    <div className='modal-route'>
                        <div className='route-point'>
                            <h3>{selectedFlight.departureTime}</h3>
                            <h4>{selectedFlight.originAirportCode}</h4>
                            <p>{selectedFlight.originCity}</p>
                            <small>{selectedFlight.originAirport}</small>
                            <small>{selectedFlight.departureDate}</small>
                        </div>

                        <div className='route-line'>
                            <span className='duration-top'>{selectedFlight.duration}</span>
                            <div className='line-track'>
                                <span className='dot'></span>
                                <span className='dot'></span>
                            </div>
                        </div>

                        <div className='route-point route-point--right'>
                            <div className='time-row'>
                                <h3>{selectedFlight.arrivalTime}</h3>
                            </div>
                            <h4>{selectedFlight.destinationAirportCode}</h4>
                            <p>{selectedFlight.destinationCity}</p>
                            <small>{selectedFlight.destinationAirport}</small>
                            <small>{selectedFlight.arrivalDate}</small>
                        </div>
                    </div>
                    {/* ── END ROUTE ── */}

                    {/* ── META ROW ── duration, stops, cabin class */}
                    <div className='modal-meta'>
                        <div className='meta-item'>
                            <img src={spinRotate} alt="duration icon" />
                            <div className="text">
                                <p>Total Duration</p>
                                <h6>{selectedFlight.duration}</h6>
                            </div>
                        </div>
                        <div className='meta-divider'></div>
                        <div className='meta-item'>
                            <img src={spinRotate} alt="stops icon" />
                            <div className="text">
                                <p>Stops</p>
                                <h6>Nonstop</h6>
                            </div>
                        </div>
                        <div className='meta-divider'></div>
                        <div className='meta-item'>
                            <img src={seatIcon} alt="cabin class icon" />
                            <div className="text">
                                <p>Cabin Class</p>
                                <h6>{selectedFlight.cabinClass}</h6>
                            </div>
                        </div>
                    </div>
                    {/* ── END META ROW ── */}

                    {/* ── BODY ── flight leg on left, price/vendors on right */}
                    <div className='modal-body'>

                        {/* ── FLIGHT LEG ── */}
                        <div className='modal-legs'>
                            <h4>Flight Details</h4>

                            <div className='leg-item'>
                                <span className='leg-dot'></span>
                                <div className='leg-content'>
                                    <div className='leg-code-row'>
                                        <p className='leg-code'>{selectedFlight.airlineName}</p>
                                        <span className='leg-flight-no'>{selectedFlight.flightNumber}</span>
                                    </div>
                                    <div className='leg-route'>
                                        <div className='leg-airport'>
                                            <h5>{selectedFlight.originAirportCode}</h5>
                                            <p>{selectedFlight.originCity}</p>
                                        </div>
                                        <span className='leg-duration'>{selectedFlight.duration}</span>
                                        <div className='leg-airport'>
                                            <h5>{selectedFlight.destinationAirportCode}</h5>
                                            <p>{selectedFlight.destinationCity}</p>
                                        </div>
                                    </div>
                                    <div className='leg-times'>
                                        <span>{selectedFlight.departureTime}</span>
                                        <span>{selectedFlight.arrivalTime}</span>
                                    </div>
                                    <p className='leg-terminal'>{selectedFlight.aircraft}</p>
                                </div>
                            </div>
                        </div>
                        {/* ── END FLIGHT LEG ── */}

                        {/* ── SIDE ── price, baggage, vendors */}
                        <div className='modal-side'>

                            <div className='side-card'>
                                <p>Price (per person)</p>
                                <h3>{formatPrice(selectedFlight.priceUSD)}</h3>
                            </div>

                            <div className='side-card'>
                                <div className='emissions-row'>
                                    <p>Baggage Allowance</p>
                                </div>
                                <h6>{selectedFlight.baggageAllowance}</h6>
                            </div>

                            <div className='side-card side-vendors'>
                                <h6>Available Vendors</h6>

                                <div className='vendor-item'>
                                    <div className='vendor-left'>
                                        {renderAirlineLogo(selectedFlight.airlineCode, selectedFlight.airlineName)}
                                        <div className="text">
                                            <p>{selectedFlight.airlineName}</p>
                                            <span>Best Price</span>
                                        </div>
                                    </div>
                                    <div className='vendor-right'>
                                        <p>{formatPrice(selectedFlight.priceUSD)}</p>
                                        <button>Book</button>
                                    </div>
                                </div>

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