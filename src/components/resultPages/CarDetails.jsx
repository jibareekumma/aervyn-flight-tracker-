

import favoriteIcon from "/icons/favorite_icon.png"
import shareIcon from "/icons/share_icon.png"
import rightArrow from "/icons/right_arr.png"
import locationIcon from "/icons/location.png"

import "../../css/CarDetail.css"
import { useEffect, useState } from "react"
import { useFavorites } from "../../context/FavoriteContext"

const CarDetails = function ({
    isOpen,
    onClose,
    selectedCar,
    sheetClose,
    imageErrors,
    onImageError
}) {

    const [displayCar, setDisplayCar] = useState(null);
    const { isFavorite, toggleFavorite } = useFavorites()
    const carIsFavorited = displayCar ? isFavorite(displayCar, "car") : false

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

    const handleFavoriteClick = function (e) {
        e.stopPropagation()
        toggleFavorite(displayCar, "car")
    }

    const renderImage = function (imagePath, altText, className) {
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
                onError={() => onImageError(imagePath)}
            />
        )
    }

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

                    <div className='car-header'>
                        {renderImage(displayCar.image, "Image of car", "car-image")}
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
                                {renderImage(car.image, car.name, "similar-car-image")}
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

                    <div className="car-details-footer">
                        <div className="car-favorite" onClick={handleFavoriteClick}>
                            <img src={favoriteIcon} alt="Favorite Icon"
                                loading="lazy" title="Add to favorite"
                                className={carIsFavorited ? 'favorited' : ''}
                            />
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

                </div>
            )}

        </div>


        <div className={`car-modal-window ${selectedCar ? 
            'car-modal-window--active' : ''}`}>

            {displayCar && (
                <div className='car-modal-wrapper'>

                    <div className='car-modal-top'>
                        <div className='car-modal-top-left'>
                            {renderImage(displayCar.image, "Image of car", "car-modal-image")}
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
                            title="Add to favorites" onClick={handleFavoriteClick}>
                                <img src={favoriteIcon} 
                                alt="Favourite Icon" loading="lazy"
                                className={carIsFavorited ? 'favorited' : ''}
                                />
                            </div>
                            <div className="car-icon-item" 
                            title="Share Car">
                                <img src={shareIcon} 
                                alt="Share Icon" loading="lazy" />
                            </div>
                        </div>
                    </div>

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

                    <div className='car-modal-body'>

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
                                        {renderImage(car.image, car.name, "similar-car-image")}
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

                    </div>

                    <div className="car-modal-footer">
                        <div className='car-footer-top'>
                            <div className="car-favorite" onClick={handleFavoriteClick}>
                                <img src={favoriteIcon}
                                    alt="Favorite Icon"
                                    loading="lazy" title="Add to favorite"
                                    className={carIsFavorited ? 'favorited' : ''}
                                />
                                <p>{carIsFavorited ? 'Added to Favorites' : 'Add to Favorites'}</p>
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

                </div>
            )}

        </div>

    </>
}

export default CarDetails