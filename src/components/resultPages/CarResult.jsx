


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

import { useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import CarDetails from "./CarDetails"

import "../../css/Result.css"

const CarResult = function () {

    const [showOverlay, setShowOverlay] = useState(false)
    const [selectedCar, setSelectedCar] = useState(null)

    const [allCars, setAllCars] = useState([])
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
        fetch("/data/carsData.json")
            .then(function (res) { return res.json() })
            .then(function (data) {
                setAllCars(data.cars)
                setLoading(false)
            })
            .catch(function (err) {
                console.log('Failed to load cars data:', err)
                setLoading(false)
            })
    }, [])

    const matchingCars = allCars.filter(function (car) {
        return car.cityCode === cityCode
    })

    const handleImageError = function (imagePath) {
        setImageErrors(function (prev) {
            return { ...prev, [imagePath]: true }
        })
    }

    const renderCarImage = function (imagePath, altText, className) {
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
                <p>Loading cars...</p>
            </div>
        )
    }

    if (matchingCars.length === 0) {
        return (
            <div className="result-container">
                <p>No cars found for this city.
                    Try Lagos, London, or Dubai.</p>
            </div>
        )
    }

    const cityName = matchingCars[0].city

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
                                <p>1 Car</p>
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
                <h6>{matchingCars.length} Cars Found</h6>

                <section className='details-container' 
                    id="details-container">

                    {matchingCars.map(car => (
                        <div className='car-item-detail' key={car.id}
                            onClick={() => {
                                setShowOverlay(true)
                                setSelectedCar(car)
                            }}
                        >
                            {renderCarImage(car.image, "Image of car", "item-photo")}
                            <div className="item-details">
                                <h5>{car.name}</h5>
                                <p>{car.type}</p>
                                <div className="rating">
                                    <h6>{car.seats} Seats</h6>
                                    <p>{car.transmission}</p>
                                </div>
                                <div className="pecs">
                                    <h5>${car.price}</h5>
                                    <p>/day</p>
                                </div>
                            </div>
                            <div className="item-action">
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

        <CarDetails
            isOpen={showOverlay}
            onClose={() => setShowOverlay(false)}
            selectedCar={selectedCar}
            sheetClose={() => setSelectedCar(null)}
            imageErrors={imageErrors}
            onImageError={handleImageError}
        />

    </>
}

export default CarResult