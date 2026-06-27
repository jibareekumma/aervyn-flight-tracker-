


import favoriteIcon from "/icons/favorite_icon.png"
import leftArrow from "/icons/left_arrow_icon.png"
import rightArrow from "/icons/right_arr.png"
import selectArrow from "/icons/select arrow.png"
import twoSideArrow from "/icons/toandfro_icon.png"
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
import { useState, useEffect } from "react"

import { useLocation } from "react-router-dom"

import "../../css/Result.css"

const FlightResult = function () {

    const [showOverlay, setShowOverlay] = useState(false)
    const [selectedFlight, setSelectedFlight] = useState(null)

    const [allFlights, setAllFlights] = useState([])
    const [loading, setLoading] = useState(true)

    const [logoErrors, setLogoErrors] = useState({})

    const { state } = useLocation()
    const fromCode = state ? state.fromCode : 'LOS'
    const toCode = state ? state.toCode : 'LHR'

    const navigate = useNavigate()

    useEffect(function () {
        fetch("/data/flightsData.json")
            .then(function (res) { return res.json() })
            .then(function (data) {
                setAllFlights(data.flights)
                setLoading(false)
            })
            .catch(function (err) {
                console.log('Failed to load flights data:', err)
                setLoading(false)
            })
    }, [])

    const matchingFlights = allFlights.filter(function (flight) {
        return flight.originAirportCode === fromCode &&
            flight.destinationAirportCode === toCode
    })

    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    })

    const today2 = new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long'
    })

    const formatPrice = function (priceUSD) {
        return `$${priceUSD}`
    }

    const getInitials = function (airlineName) {
        return airlineName
            .split(' ')
            .map(function (word) { return word[0] })
            .join('')
            .slice(0, 2)
            .toUpperCase()
    }

    const getAirlineColor = function (airlineCode) {
        const colors = [
            '#E63946', '#1D3557', '#2A9D8F', '#E76F51', '#264653',
            '#F4A261', '#457B9D', '#6A4C93', '#3D5A80', '#BC4749'
        ]
        let hash = 0
        for (let i = 0; i < airlineCode.length; i++) {
            hash = airlineCode.charCodeAt(i) + ((hash << 5) - hash)
        }
        return colors[Math.abs(hash) % colors.length]
    }

    const handleLogoError = function (airlineCode) {
        setLogoErrors(function (prev) {
            return { ...prev, [airlineCode]: true }
        })
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
                onError={() => handleLogoError(airlineCode)}
            />
        )
    }

    if (loading) {
        return (
            <div className="result-container">
                <p>Loading flights...</p>
            </div>
        )
    }

    if (matchingFlights.length === 0) {
        return (
            <div className="result-container">
                <p>No flights found for this route.
                    Try Lagos → London, Dubai, or New York.</p>
            </div>
        )
    }

    const fromCity = matchingFlights[0].originCity
    const toCity = matchingFlights[0].destinationCity

    return <>

        <div className="result-container">

            <aside className="desktop-sidebar">
                <div className="sidebar-top">
                    <img src={mainIcon}
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
                        <div className="icon-container"
                            onClick={() => navigate('/dashboard')}
                        >
                            <img src={leftArrow}
                                alt="Arrow Towards left" loading="lazy"
                            />
                        </div>

                        <div className='text-container'>

                            <div className='locations'>
                                <h5>{fromCity}</h5>
                                <img src={rightArrow}
                                    alt="Arrow Towards right" loading="lazy" />
                                <h5>{toCity}</h5>
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
                <h6>{matchingFlights.length} Flights Found</h6>

                <section className='details-container'>

                    {matchingFlights.map(flight => (
                        <div className='details-item' key={flight.id}
                            onClick={() => {
                                setShowOverlay(true)
                                setSelectedFlight(flight)
                            }}
                        >
                            <div className="airline-name">
                                {renderAirlineLogo(flight.airlineCode, flight.airlineName)}
                                <p>{flight.airlineName}</p>
                            </div>
                            <div className="time-details">
                                <div className='one'>
                                    <h5>{flight.departureTime}</h5>
                                    <p>{flight.originAirportCode}</p>
                                </div>
                                <div className='two'>
                                    <p>{flight.duration}</p>
                                    <img src={twoSideArrow} alt="Two side arrow" />
                                    <p>Nonstop</p>
                                </div>
                                <div className='one'>
                                    <h5>{flight.arrivalTime}</h5>
                                    <p>{flight.destinationAirportCode}</p>
                                </div>
                            </div>

                            <div className="time-details-dsk">
                                <div className='one'>
                                    <h5>{flight.departureTime}</h5>
                                    <p>{flight.originAirportCode}</p>
                                    <h6>{today2}</h6>
                                </div>
                                <div className='two'>
                                    <img src={leftArrowDsk}
                                        alt="Arrow Icon" loading="lazy" />
                                    <div>
                                        <p>{flight.duration}</p>
                                        <p>Nonstop</p>
                                    </div>
                                    <img src={rightArrowDsk}
                                        alt="Arrow icon" loading="lazy" />
                                </div>
                                <div className='one'>
                                    <h5>{flight.arrivalTime}</h5>
                                    <p>{flight.destinationAirportCode}</p>
                                    <h6>{today2}</h6>
                                </div>
                            </div>

                            <div className='price-detail'>
                                <div className='price-detail-item'>
                                    <h4>{formatPrice(flight.priceUSD)}</h4>
                                    <p>/person</p>
                                </div>
                                <img src={favoriteIcon}
                                    alt="Add to favorite"
                                    title="Add to favorite" loading="lazy" />
                            </div>
                        </div>
                    ))}

                </section>

            </div>

        </div>

        <FlightDetails
            isOpen={showOverlay}
            onClose={() => setShowOverlay(false)}
            selectedFlight={selectedFlight}
            sheetClose={() => setSelectedFlight(null)}
            logoErrors={logoErrors}
            onLogoError={handleLogoError}
            getInitials={getInitials}
            getAirlineColor={getAirlineColor}
        />
    </>
}

export default FlightResult