


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



import hotel1 from "/photos/hotel1.jpeg"
import hotel2 from "/photos/hotel2.jpeg"
import hotel3 from "/photos/hotel3.jpeg"


import deluxeRoom from "/photos/deluxe_room.jpeg"
import executiveSuites from "/photos/executive_room.jpeg"


import { useNavigate } from "react-router-dom"
import HotelDetails from "./HotelDetails"


import "../../css/Result.css"
import { useState } from "react"


const HotelResult = function () {

    const [showOverlay, setShowOverlay] = useState(false);
    const [selectedHotel, setSelectedHotel] = useState(null);


    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    })

    const navigate = useNavigate()

    const hotels = [
        {
            id: 1,
            name: "Claridge's (Mayfair)",
            image: hotel2,
            rating: 5,
            reviewScore: "8.7",
            reviewLabel: "Excellent",
            price: "$180",
            amenities: ["Free WiFi", "Gym", "Pool", "Breakfast"],
            address: "Brooks Mews, Mayfair, London W1K 4HR, UK",
            checkIn: "Jun 22",
            checkOut: "Jun 25",
            guests: "2 Adults",
            rooms: [
                { id: 1, name: "Deluxe Room", bedInfo: "King Bed · City View", price: "$180", image: deluxeRoom },
                { id: 2, name: "Executive Suite", bedInfo: "King Bed · Park View", price: "$260", image: executiveSuites }
            ]
        },
        {
            id: 2,
            name: "Brown's Hotel",
            image: hotel3,
            rating: 5,
            reviewScore: "8.0",
            reviewLabel: "Excellent",
            price: "$180",
            amenities: ["Free WiFi", "Gym", "Spa"],
            address: "Albemarle St, Mayfair, London W1S 4BP, UK",
            checkIn: "Jun 22",
            checkOut: "Jun 25",
            guests: "2 Adults",
            rooms: [
                { id: 1, name: "Classic Room", bedInfo: "Queen Bed · Street View", price: "$180", image: deluxeRoom },
                { id: 2, name: "Junior Suite", bedInfo: "King Bed · City View", price: "$245", image: executiveSuites }
            ]
        },
        {
            id: 3,
            name: "The Connaught Hotel",
            image: hotel1,
            rating: 5,
            reviewScore: "9.2",
            reviewLabel: "Excellent",
            price: "$180",
            amenities: ["Free WiFi", "Gym", "Breakfast"],
            address: "Carlos Pl, Mayfair, London W1K 2AL, UK",
            checkIn: "Jun 22",
            checkOut: "Jun 25",
            guests: "2 Adults",
            rooms: [
                { id: 1, name: "Deluxe Room", 
                    bedInfo: "King Bed · City View", price: "$180",
                   image: deluxeRoom },
                { id: 2, name: "Connaught Suite", bedInfo: "King Bed · Park View", 
                    price: "$310", image: executiveSuites }
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
                <h6>342 Hotels Found</h6>

                <section className='details-container' id="details-container">

                    {hotels.map(hotel => (
                        <div className='details-item' id="details-item-hotel" key={hotel.id}

                            onClick={() => {
                                setShowOverlay(true)
                                setSelectedHotel(hotel)
                            }}

                        >

                            <img src={hotel.image} alt="Image of hotel"
                                loading='lazy' className="item-photo"
                            />
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
        />

    </>
}


export default HotelResult
