

import favoriteIcon from "/icons/favorite_icon.png"
import shareIcon from "/icons/share_icon.png"
import starIcon from "/icons/star icon.png"
import rightArrow from "/icons/right_arr.png"
import locationIcon from "/icons/location.png"

import wifiIcon from "/icons/wifi_icon.png"
import gymIcon from "/icons/gym_icon.png"
import poolIcon from "/icons/pool_icon.png"
import mealIcon from "/icons/meal_icon.png"



import "../../css/HotelDetails.css"
import { useEffect } from "react"

const HotelDetails = function ({ isOpen, onClose, 
    selectedHotel, sheetClose }) {

    useEffect(() => {
        if (selectedHotel) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [selectedHotel])


    const amenityIcons = {
    "Free WiFi": wifiIcon,
    "Gym": gymIcon,
    "Pool": poolIcon,
    "Breakfast": mealIcon,
    "Spa": favoriteIcon
}

    return <>

        <div className={`overlay ${isOpen ? 'overlay--active' : ''}`}
            onClick={() => {
                onClose()
                sheetClose()
            }}
        />

        <div className={`bottom-sheet ${selectedHotel ? 
            'bottom-sheet--active' : ''}`}>

            {selectedHotel && (
                <div className='details-wrapper'>

                    {/* ── HEADER ── hotel image, name, rating, address */}
                    <div className='hotel-header'>
                        <img src = {selectedHotel.image} alt="Image of hotel" 
                        loading = "lazy" className = "hotel-image"
                        />
                        <div className="text">
                            <h5>{selectedHotel.name}</h5>
                            <div className='stars-row'>
                                {Array.from({ length: selectedHotel.rating }).map((_, i) => (
                                    <img key={i} src={starIcon} alt="Star" loading="lazy" />
                                ))}
                                <span className='review-score'>
                                    {selectedHotel.reviewScore}</span>
                                <span className='review-label'>
                                    {selectedHotel.reviewLabel}</span>
                            </div>
                            <div className='address-row'>
                                <img src={locationIcon} 
                                alt="Location pin" loading="lazy" />
                                <p>{selectedHotel.address}</p>
                            </div>
                        </div>
                    </div>
                    {/* ── END HEADER ── */}


                    {/* ── STAY INFO ── check-in, check-out, guests */}
                    <div className="stay-info">
                        <div className='stay-info-item'>
                            <p>Check-in</p>
                            <h6>{selectedHotel.checkIn}</h6>
                        </div>
                        <div className='stay-info-item'>
                            <p>Check-out</p>
                            <h6>{selectedHotel.checkOut}</h6>
                        </div>
                        <div className='stay-info-item'>
                            <p>Guests</p>
                            <h6>{selectedHotel.guests}</h6>
                        </div>
                    </div>
                    {/* ── END STAY INFO ── */}


                    {/* ── AMENITIES ── pill icons */}
                    <div className='amenities'>
                        <h4>Amenities</h4>
                        <div className='amenities-pecs'>
                            {selectedHotel.amenities.slice(0, 4).map((item, i) => (
                                <span key={i} className='pec-pill'>
                                    <img src={amenityIcons[item]} 
                                    alt={item} loading="lazy" />
                                    {item}
                                </span>
                            ))}
                            {selectedHotel.amenities.length > 4 && (
                                <span className='pec-pill pec-pill--more'>
                                    +{selectedHotel.amenities.length - 4}
                                </span>
                            )}
                        </div>
                    </div>
                    {/* ── END AMENITIES ── */}


                    {/* ── ROOM TYPES ── */}
                    <div className='room-types'>
                        <h4>Room Types</h4>
                        {selectedHotel.rooms.map(room => (
                            <div className='room-item' key={room.id}>
                               <img src={room.image} alt={room.name} 
                               loading="lazy" className="room-image" />
                                <div className='room-info'>
                                    <h6>{room.name}</h6>
                                    <p>{room.bedInfo}</p>
                                </div>
                                <div className='room-action'>
                                    <div className='room-price'>
                                        <h5>{room.price}</h5>
                                        <p>/night</p>
                                    </div>
                                    <button className='select-btn'>
                                        Select</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* ── END ROOM TYPES ── */}


                    {/* ── FOOTER ── favorite, share, reserve now */}
                    <div className="details-footer">
                        <div className="favorite">
                            <img src={favoriteIcon} alt="Favorite Icon"
                                loading="lazy" title="Add to favorite" />
                        </div>
                        <div className="share">
                            <img src={shareIcon} 
                            alt="Share Icon"
                                loading="lazy" 
                                title="Share with friends" />
                        </div>
                        <button className="book-btn"
                            title="Reserve Now">
                            <span className='price-pill'>
                                {selectedHotel.price}<small>
                                    /night</small></span>
                            <p>Reserve Now</p>
                            <img src={rightArrow} 
                            alt="Right Arrow" loading="lazy" />
                        </button>
                    </div>
                    {/* ── END FOOTER ── */}

                </div>
            )}

        </div>


        <div className={`modal-window ${selectedHotel ? 
            'modal-window--active' : ''}`}>

            {selectedHotel && (
                <div className='modal-wrapper'>

                    {/* ── TOP ── hotel image, name, rating, address, favorite/share icons */}
                    <div className='modal-top'>
                        <div className='modal-top-left'>
                            <img src={selectedHotel.image} alt="Image of hotel"
                                loading="lazy" className="hotel-image" />
                            <div className="text">
                                <h5>{selectedHotel.name}</h5>
                                <div className='stars-row'>
                                    {Array.from({ length: selectedHotel.rating }).map((_, i) => (
                                        <img key={i} src={starIcon} 
                                        alt="Star" loading="lazy" />
                                    ))}
                                    <span className='review-score'>
                                        {selectedHotel.reviewScore}</span>
                                    <span className='review-label'>
                                        {selectedHotel.reviewLabel}</span>
                                </div>
                                <div className='address-row'>
                                    <img src={favoriteIcon} 
                                    alt="Location pin" loading="lazy" />
                                    <p>{selectedHotel.address}</p>
                                </div>
                            </div>
                        </div>
                        <div className='modal-top-right'>
                            <div className="icon-item" 
                            title="Add to favorites">
                                <img src={favoriteIcon} 
                                alt="Favourite Icon" loading="lazy" />
                            </div>
                            <div className="icon-item" 
                            title="Share Hotel">
                                <img src={shareIcon} 
                                alt="Share Icon" loading="lazy" />
                            </div>
                        </div>
                    </div>
                    {/* ── END TOP ── */}


                    {/* ── STAY INFO ── check-in, check-out, guests */}
                    <div className="stay-info">
                        <div className='stay-info-item'>
                            <p>Check-in</p>
                            <h6>{selectedHotel.checkIn}</h6>
                        </div>
                        <div className='stay-info-item'>
                            <p>Check-out</p>
                            <h6>{selectedHotel.checkOut}</h6>
                        </div>
                        <div className='stay-info-item'>
                            <p>Guests</p>
                            <h6>{selectedHotel.guests}</h6>
                        </div>
                    </div>
                    {/* ── END STAY INFO ── */}


                    {/* ── BODY ── amenities + room types on left, price/policies on right */}
                    <div className='modal-body'>

                        {/* ── LEFT ── amenities, room types */}
                        <div className='modal-main'>

                            <div className='amenities'>
                                <h4>Amenities</h4>
                                <div className='amenities-pecs'>
                                    {selectedHotel.amenities.map((item, i) => (
                                        <span key={i} className='pec-pill'>
                                            <img src={favoriteIcon} 
                                            alt={item} loading="lazy" />
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className='room-types'>
                                <h4>Room Types</h4>
                                {selectedHotel.rooms.map(room => (
                                    <div className='room-item' key={room.id}>
                                        <img src={room.image} alt={room.name}
                                            loading="lazy" className="room-image" />
                                        <div className='room-info'>
                                            <h6>{room.name}</h6>
                                            <p>{room.bedInfo}</p>
                                        </div>
                                        <div className='room-action'>
                                            <div className='room-price'>
                                                <h5>{room.price}</h5>
                                                <p>/night</p>
                                            </div>
                                            <button className='select-btn'>Select</button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                        {/* ── END LEFT ── */}


                        {/* ── RIGHT ── price card, cancellation policy */}
                        <div className='modal-side'>

                            <div className='side-card'>
                                <p>Price (per night)</p>
                                <h3>{selectedHotel.price}</h3>
                            </div>

                            <div className='side-card'>
                                <h6>Free Cancellation</h6>
                                <p className='policy-note'>
                                    Cancel before check-in f
                                    or a full refund</p>
                            </div>

                        </div>
                        {/* ── END RIGHT ── */}

                    </div>
                    {/* ── END BODY ── */}


                    {/* ── FOOTER ── favorite, share, reserve now, disclaimer */}
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
                                <p>Share Hotel</p>
                            </div>
                            <button className="book-btn"
                                title="Reserve Now">
                                <p>Reserve Now</p>
                                <img src={rightArrow}
                                    alt="Right Arrow" loading="lazy" />
                            </button>
                        </div>
                        <p className='disclaimer'>You will be
                            redirected to the hotel's site to
                            complete your reservation</p>
                    </div>
                    {/* ── END FOOTER ── */}

                </div>
            )}

        </div>

    </>
}

export default HotelDetails
