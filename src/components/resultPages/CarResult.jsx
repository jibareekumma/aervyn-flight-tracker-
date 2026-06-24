

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

import car1 from "/photos/car1.jpeg"
import car2 from "/photos/car2.jpeg"
import car3 from "/photos/car3.jpeg"

import { useNavigate } from "react-router-dom"
import { useState } from "react"
import CarDetails from "./CarDetails"

import "../../css/Result.css"

const CarResult = function () {

    const [showOverlay, setShowOverlay] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);

    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    })

    const navigate = useNavigate()

    const cars = [
        {
            id: 1,
            name: "Tesla Model 3",
            type: "Electric",
            image: car1,
            seats: "5",
            transmission: "Automatic",
            fuelType: "Electric",
            price: "55",
            pickupLocation: "London Heathrow Airport (LHR)",
            pickupDate: "Mon, Jun 22 10:00 AM",
            returnLocation: "London Heathrow Airport (LHR)",
            returnDate: "Thu, Jun 25 10:00 AM",
            features: ["Air Conditioning", "GPS Navigation", "Bluetooth", "Backup Camera", "Keyless Entry", "Cruise Control"],
            similarCars: [
                { id: 1, name: "Toyota RAV4", type: "SUV", seats: "5", transmission: "Automatic", price: "48" },
                { id: 2, name: "BMW 3 Series", type: "Luxury", seats: "5", transmission: "Automatic", price: "75" }
            ]
        },
        {
            id: 2,
            name: "Toyota RAV4",
            type: "SUV",
            image: car2,
            seats: "5",
            transmission: "Automatic",
            fuelType: "Hybrid",
            price: "48",
            pickupLocation: "London Heathrow Airport (LHR)",
            pickupDate: "Mon, Jun 22 10:00 AM",
            returnLocation: "London Heathrow Airport (LHR)",
            returnDate: "Thu, Jun 25 10:00 AM",
            features: ["Air Conditioning", "GPS Navigation", "Bluetooth", "All-Wheel Drive", "Roof Rack", "Cruise Control"],
            similarCars: [
                { id: 1, name: "Tesla Model 3", type: "Electric", seats: "5", transmission: "Automatic", price: "55" },
                { id: 2, name: "BMW 3 Series", type: "Luxury", seats: "5", transmission: "Automatic", price: "75" }
            ]
        },
        {
            id: 3,
            name: "BMW 3 Series",
            type: "Luxury",
            image: car3,
            seats: "5",
            transmission: "Automatic",
            fuelType: "Petrol",
            price: "75",
            pickupLocation: "London Heathrow Airport (LHR)",
            pickupDate: "Mon, Jun 22 10:00 AM",
            returnLocation: "London Heathrow Airport (LHR)",
            returnDate: "Thu, Jun 25 10:00 AM",
            features: ["Air Conditioning", "GPS Navigation", "Bluetooth", "Leather Seats", "Sunroof", "Cruise Control"],
            similarCars: [
                { id: 1, name: "Tesla Model 3", type: "Electric", seats: "5", transmission: "Automatic", price: "55" },
                { id: 2, name: "Toyota RAV4", type: "SUV", seats: "5", transmission: "Automatic", price: "48" }
            ]
        }
    ]

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
                                <h5>Lagos</h5>
                                <img src={rightArrow}
                                    alt="Arrow Towards right"
                                    loading="lazy"
                                />
                                <h5>London</h5>
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
                <h6>129 Cars Found</h6>

                <section className='details-container' 
                    id="details-container">

                    {cars.map(car => (
                        <div className='car-item-detail' key={car.id}
                            onClick={() => {
                                setShowOverlay(true)
                                setSelectedCar(car)
                            }}
                        >
                            <img src={car.image} alt="Image of car"
                                loading='lazy' className="item-photo"
                            />
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
        />

    </>
}

export default CarResult