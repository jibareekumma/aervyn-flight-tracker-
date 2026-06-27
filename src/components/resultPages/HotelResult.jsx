

import favoriteIcon from "/icons/favorite_icon.png"
import leftArrow from "/icons/left_arrow_icon.png"
import rightArrow from "/icons/right_arr.png"
import selectArrow from "/icons/select arrow.png"

import homeIcon from "/icons/home_icon.png"
import searchIcon from "/icons/search_icon.png"
import profileIcon from "/icons/profile_icon 2.png"
import mainIcon from "/icons/main-icon.png"
import calendarIcon from "/icons/bell_icon.png"
import settingsIcon from "/icons/spin-rotate.png"
import starIcon from "/icons/star icon.png"
import visitSite from "/icons/visit-site.png"

import { useNavigate, useLocation } from "react-router-dom"
import HotelDetails from "./HotelDetails"

import "../../css/Result.css"
import { useState, useEffect } from "react"

const HotelResult = function () {

    const [showOverlay, setShowOverlay] = useState(false)
    const [selectedHotel, setSelectedHotel] = useState(null)

    const [allHotels, setAllHotels] = useState([])
    const [loading, setLoading] = useState(true)

    const [imageErrors, setImageErrors] = useState({})

    const { state } = useLocation()
    const cityCode = state ? state.cityCode : 'LOS'

    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    })

    const navigate = useNavigate()

    useEffect(function () {
        fetch("/data/hotelsData.json")
            .then(function (res) { return res.json() })
            .then(function (data) {
                setAllHotels(data.hotels)
                setLoading(false)
            })
            .catch(function (err) {
                console.log('Failed to load hotels data:', err)
                setLoading(false)
            })
    }, [])

    const matchingHotels = allHotels.filter(function (hotel) {
        return hotel.cityCode === cityCode
    })

    const handleImageError = function (imagePath) {
        setImageErrors(function (prev) {
            return { ...prev, [imagePath]: true }
        })
    }

    const renderHotelImage = function (imagePath, altText, className) {
        if (imageErrors[imagePath]) {
            return (
                <div className={`image-fallback ${className || ''}`}>
                    <span>{altText}</span>
                </div>
            )
        }
        return (
            <img
                src={imagePath}
                alt={altText}
                loading="lazy"
                className={className}
                onError={() => handleImageError(imagePath)}
            />
        )
    }

    if (loading) {
        return (
            <div className="result-container">
                <p>Loading hotels...</p>
            </div>
        )
    }

    if (matchingHotels.length === 0) {
        return (
            <div className="result-container">
                <p>No hotels found for this city.
                    Try Lagos, London, or Dubai.</p>
            </div>
        )
    }

    const cityName = matchingHotels[0].city

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
                                alt="Arrow Towards left"
                                loading="lazy"
                            />
                        </div>

                        <div className='text-container'>

                            <div className='locations'>
                                <h5>{cityName}</h5>
                            </div>

                            <div className="dates">
                                <p>{today}</p>
                                <span>.</span>
                                <p>2 Guests</p>
                            </div>

                        </div>
                    </div>

                    <button className="header-btn">
                        Edit Search
                    </button>
                </section>

                <nav className="result-nav">

                    <div className="nav-item">
                        <p>Price</p>
                        <img src={selectArrow}
                            alt="Arrow select"
                            loading="lazy"
                        />
                    </div>

                    <div className="nav-item">
                        <p>Amenities</p>
                        <img src={selectArrow}
                            alt="Arrow select"
                            loading="lazy"
                        />
                    </div>

                    <div className="nav-item">
                        <p>Filter</p>
                        <img src={selectArrow}
                            alt="Arrow select"
                            loading="lazy"
                        />
                    </div>
                </nav>
            </div>

            <div className='result-main'>
                <h6>{matchingHotels.length} Hotels Found</h6>

                <section className='details-container' id="details-container">

                    {matchingHotels.map(hotel => (
                        <div className='details-item' id="details-item-hotel" key={hotel.id}

                            onClick={() => {
                                setShowOverlay(true)
                                setSelectedHotel(hotel)
                            }}

                        >

                            {renderHotelImage(hotel.image, "Image of hotel", "item-photo")}
                            <div className="item-details">
                                <h5>{hotel.name}</h5>
                                <div className='stars-container'>
                                    {Array.from({ length: hotel.rating }).map((_, i) => (
                                        <img key={i} src={starIcon} alt="Star" loading="lazy" />
                                    ))}
                                </div>
                                <div className="rating">
                                    <h6>{hotel.reviewScore}</h6>
                                    <p>{hotel.reviewLabel}</p>
                                </div>
                                <div className="pecs">
                                    {hotel.amenities.slice(0, 3).map((item, i) => (
                                        <span key={i}>{item}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="item-action">
                                <div id="texts">
                                    <h5>{hotel.price}</h5>
                                    <p>
                                        /night
                                    </p>
                                </div>
                                <div className='visit-site'>
                                    <img src={visitSite}
                                        alt="Visit site icon" loading="lazy"
                                        className="site-icon" />
                                    <p>{hotel.reviewLabel}</p>
                                </div>

                                <img src={favoriteIcon} alt="favorite icon"
                                    loading="lazy"
                                    className="favorite-icon"
                                />
                            </div>

                        </div>
                    ))}

                </section>

            </div>

        </div>

        <HotelDetails
            isOpen={showOverlay}
            onClose={() => setShowOverlay(false)}
            selectedHotel={selectedHotel}
            sheetClose={() => setSelectedHotel(null)}
            imageErrors={imageErrors}
            onImageError={handleImageError}
        />

    </>
}

export default HotelResult