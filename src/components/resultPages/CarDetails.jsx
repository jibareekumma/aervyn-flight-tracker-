




import favoriteIcon from "/icons/favorite_icon.png"
import shareIcon from "/icons/share_icon.png"
import rightArrow from "/icons/right_arr.png"
import locationIcon from "/icons/location.png"

import "../../css/CarDetail.css"
import { useEffect, useState } from "react"

const CarDetails = function ({ isOpen, onClose, 
    selectedCar, sheetClose }) {

    const [displayCar, setDisplayCar] = useState(null);

    useEffect(() => {
        if (selectedCar) {
            setDisplayCar(selectedCar)
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [selectedCar])

    return <>

        <div className={`car-overlay ${isOpen ? 'car-overlay--active' : ''}`}
            onClick={() => {
                onClose()
                sheetClose()
            }}
        />

        <div className={`car-bottom-sheet ${selectedCar ? 
            'car-bottom-sheet--active' : ''}`}>

            {displayCar && (
                <div className='car-details-wrapper'>

                    {/* ── HEADER ── car image, name, type, specs */}
                    <div className='car-header'>
                        <img src = {displayCar.image} alt="Image of car" 
                        loading = "lazy" className = "car-image"
                        />
                        <div className="car-text">
                            <h5>{displayCar.name}</h5>
                            <p className='car-type'>{displayCar.type}</p>
                            <div className='car-specs-row'>
                                <span className='car-spec'>
                                    <span className='spec-value'>{displayCar.seats}</span> Seats
                                </span>
                                <span className='car-spec-divider'>•</span>
                                <span className='car-spec'>{displayCar.transmission}</span>
                                <span className='car-spec-divider'>•</span>
                                <span className='car-spec'>{displayCar.fuelType}</span>
                            </div>
                        </div>
                    </div>
                    {/* ── END HEADER ── */}


                    {/* ── LOCATION INFO ── pickup and return locations */}
                    <div className="car-location-info">
                        <div className='location-item'>
                            <div className='location-label'>
                                <span className='pickup-badge'>Pickup</span>
                            </div>
                            <h6>{displayCar.pickupLocation}</h6>
                            <p>{displayCar.pickupDate}</p>
                        </div>
                        <div className='location-divider'></div>
                        <div className='location-item'>
                            <div className='location-label'>
                                <span className='return-badge'>Return</span>
                            </div>
                            <h6>{displayCar.returnLocation}</h6>
                            <p>{displayCar.returnDate}</p>
                        </div>
                    </div>
                    {/* ── END LOCATION INFO ── */}


                    {/* ── CAR FEATURES ── */}
                    <div className='car-features'>
                        <h4>Features</h4>
                        <div className='car-features-grid'>
                            {displayCar.features.map((feature, i) => (
                                <span key={i} className='feature-pill'>
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* ── END CAR FEATURES ── */}


                    {/* ── AVAILABLE CARS ── similar cars */}
                    <div className='similar-cars'>
                        <h4>Similar Cars</h4>
                        {displayCar.similarCars.map(car => (
                            <div className='similar-car-item' key={car.id}>
                                <div className='similar-car-placeholder'>
                                    <span>Car Image</span>
                                </div>
                                <div className='similar-car-info'>
                                    <h6>{car.name}</h6>
                                    <p>{car.type}</p>
                                    <div className='similar-car-specs'>
                                        <span>{car.seats} Seats</span>
                                        <span>{car.transmission}</span>
                                    </div>
                                </div>
                                <div className='similar-car-action'>
                                    <div className='similar-car-price'>
                                        <h5>${car.price}</h5>
                                        <p>/day</p>
                                    </div>
                                    <button className='select-car-btn'>
                                        Select
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* ── END AVAILABLE CARS ── */}


                    {/* ── FOOTER ── favorite, share, rent now */}
                    <div className="car-details-footer">
                        <div className="car-favorite">
                            <img src={favoriteIcon} alt="Favorite Icon"
                                loading="lazy" title="Add to favorite" />
                        </div>
                        <div className="car-share">
                            <img src={shareIcon} 
                            alt="Share Icon"
                                loading="lazy" 
                                title="Share with friends" />
                        </div>
                        <button className="car-book-btn"
                            title="Rent Now">
                            <span className='car-price-pill'>
                                ${displayCar.price}<small>
                                    /day</small></span>
                            <p>Rent Now</p>
                            <img src={rightArrow} 
                            alt="Right Arrow" loading="lazy" />
                        </button>
                    </div>
                    {/* ── END FOOTER ── */}

                </div>
            )}

        </div>


        <div className={`car-modal-window ${selectedCar ? 
            'car-modal-window--active' : ''}`}>

            {displayCar && (
                <div className='car-modal-wrapper'>

                    {/* ── TOP ── car image, name, type, specs, favorite/share icons */}
                    <div className='car-modal-top'>
                        <div className='car-modal-top-left'>
                            <img src={displayCar.image} alt="Image of car"
                                loading="lazy" className="car-modal-image" />
                            <div className="car-modal-text">
                                <h5>{displayCar.name}</h5>
                                <p className='car-type'>{displayCar.type}</p>
                                <div className='car-specs-row'>
                                    <span className='car-spec'>
                                        <span className='spec-value'>{displayCar.seats}</span> Seats
                                    </span>
                                    <span className='car-spec-divider'>•</span>
                                    <span className='car-spec'>{displayCar.transmission}</span>
                                    <span className='car-spec-divider'>•</span>
                                    <span className='car-spec'>{displayCar.fuelType}</span>
                                </div>
                            </div>
                        </div>
                        <div className='car-modal-top-right'>
                            <div className="car-icon-item" 
                            title="Add to favorites">
                                <img src={favoriteIcon} 
                                alt="Favourite Icon" loading="lazy" />
                            </div>
                            <div className="car-icon-item" 
                            title="Share Car">
                                <img src={shareIcon} 
                                alt="Share Icon" loading="lazy" />
                            </div>
                        </div>
                    </div>
                    {/* ── END TOP ── */}


                    {/* ── LOCATION INFO ── pickup and return */}
                    <div className="car-location-info">
                        <div className='location-item'>
                            <div className='location-label'>
                                <span className='pickup-badge'>Pickup</span>
                            </div>
                            <h6>{displayCar.pickupLocation}</h6>
                            <p>{displayCar.pickupDate}</p>
                        </div>
                        <div className='location-divider'></div>
                        <div className='location-item'>
                            <div className='location-label'>
                                <span className='return-badge'>Return</span>
                            </div>
                            <h6>{displayCar.returnLocation}</h6>
                            <p>{displayCar.returnDate}</p>
                        </div>
                    </div>
                    {/* ── END LOCATION INFO ── */}


                    {/* ── BODY ── features + similar cars on left, price/policies on right */}
                    <div className='car-modal-body'>

                        {/* ── LEFT ── features, similar cars */}
                        <div className='car-modal-main'>

                            <div className='car-features'>
                                <h4>Features</h4>
                                <div className='car-features-grid'>
                                    {displayCar.features.map((feature, i) => (
                                        <span key={i} className='feature-pill'>
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className='similar-cars'>
                                <h4>Similar Cars</h4>
                                {displayCar.similarCars.map(car => (
                                    <div className='similar-car-item' key={car.id}>
                                        <div className='similar-car-placeholder'>
                                            <span>Car Image</span>
                                        </div>
                                        <div className='similar-car-info'>
                                            <h6>{car.name}</h6>
                                            <p>{car.type}</p>
                                            <div className='similar-car-specs'>
                                                <span>{car.seats} Seats</span>
                                                <span>{car.transmission}</span>
                                            </div>
                                        </div>
                                        <div className='similar-car-action'>
                                            <div className='similar-car-price'>
                                                <h5>${car.price}</h5>
                                                <p>/day</p>
                                            </div>
                                            <button className='select-car-btn'>
                                                Select
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                        {/* ── END LEFT ── */}


                        {/* ── RIGHT ── price card, cancellation policy */}
                        <div className='car-modal-side'>

                            <div className='car-side-card'>
                                <p>Price (per day)</p>
                                <h3>${displayCar.price}</h3>
                            </div>

                            <div className='car-side-card'>
                                <h6>Free Cancellation</h6>
                                <p className='car-policy-note'>
                                    Cancel before pickup for a full refund
                                </p>
                            </div>

                            <div className='car-side-card car-insurance-card'>
                                <h6>Insurance Included</h6>
                                <p className='car-policy-note'>
                                    Basic coverage included • Optional upgrades available
                                </p>
                            </div>

                        </div>
                        {/* ── END RIGHT ── */}

                    </div>
                    {/* ── END BODY ── */}


                    {/* ── FOOTER ── favorite, share, rent now, disclaimer */}
                    <div className="car-modal-footer">
                        <div className='car-footer-top'>
                            <div className="car-favorite">
                                <img src={favoriteIcon}
                                    alt="Favorite Icon"
                                    loading="lazy" title="Add to favorite" />
                                <p>Add to Favorites</p>
                            </div>
                            <div className="car-share">
                                <img src={shareIcon} alt="Share Icon"
                                    loading="lazy"
                                    title="Share with friends" />
                                <p>Share Car</p>
                            </div>
                            <button className="car-book-btn"
                                title="Rent Now">
                                <p>Rent Now</p>
                                <img src={rightArrow}
                                    alt="Right Arrow" loading="lazy" />
                            </button>
                        </div>
                        <p className='car-disclaimer'>You will be
                            redirected to the rental company's site to
                            complete your reservation</p>
                    </div>
                    {/* ── END FOOTER ── */}

                </div>
            )}

        </div>

    </>
}

export default CarDetails
