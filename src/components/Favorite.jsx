import React, { useState } from "react";
import "../css/Favorite.css";


import FooterNavigation from "./FooterNavigation";
import flightImage from "/photos/flight_booking_img.jpeg";
import bookingIcon2 from "/icons/booking_icon2.png";
import favoriteIcon from "/icons/favorite_icon.png"
import mainIcon from "/icons/main-icon.png"
import homeIcon from "/icons/home_icon.png"
import profileIcon from "/icons/profile_icon 2.png"
import calendarIcon from "/icons/bell_icon.png"
import settingsIcon from "/icons/spin-rotate.png"


import { useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoriteContext";

const FavoriteImage = function ({ image, name }) {
  const [hasError, setHasError] = useState(false)
  if (hasError) {
    return (
      <div className="image-fallback">
        <span>{name}</span>
      </div>
    )
  }
  return (
    <img
      src={image}
      alt={name}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  )
}

const Favorite = () => {
  const [activeTab, setActiveTab] = useState("all");
  const { favorites, toggleFavorite } = useFavorites();
  const navigate = useNavigate();

  const favoriteFlights = favorites.filter(function (fav) {
    return fav.type === "flight";
  }).map(function (fav) {
    return { ...fav.data, favId: fav.favId };
  });

  const favoriteHotels = favorites.filter(function (fav) {
    return fav.type === "hotel";
  }).map(function (fav) {
    return { ...fav.data, favId: fav.favId };
  });

  const favoriteCars = favorites.filter(function (fav) {
    return fav.type === "car";
  }).map(function (fav) {
    return { ...fav.data, favId: fav.favId };
  });

  const hasAnyFavorites = favoriteFlights.length > 0 || favoriteHotels.length > 0 || favoriteCars.length > 0;

  return (
    <>
      <aside className="desktop-sidebar">
        <div className="sidebar-top">
          <img src={mainIcon}
            alt="logo" className="sidebar-logo" />
        </div>
        <div className="sidebar-icons">
          <div className="sidebar-icon">
            <img src={homeIcon} alt="home" />
          </div>
          <div className="sidebar-icon">
            <img src={bookingIcon2} alt="bookings" />
          </div>
          <div className="sidebar-icon">
            <img src={calendarIcon} alt="calendar" />
          </div>
          <div className="sidebar-icon active">
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

      <div className="favorites-page">

        <header className="favorites-header">
          <img src={favoriteIcon}
            alt="Favorite Icon" loading="lazy" />
          <h2 className="page-title">Favorites</h2>
        </header>

        {!hasAnyFavorites && (
          <div className="favorites-empty">
            <img src={favoriteIcon} alt="No favorites" loading="lazy" />
            <h3>No favorites yet</h3>
            <p>Tap the heart icon on any flight, hotel, or car to save it here.</p>
          </div>
        )}

        {hasAnyFavorites && (
          <>
            <div className="filter-tabs">
              <button
                className={activeTab === "all" ? "active" : ""}
                onClick={() => setActiveTab("all")}
              >
                All Favorites
              </button>
              <button
                className={activeTab === "flights" ? "active" : ""}
                onClick={() => setActiveTab("flights")}
              >
                Flights
              </button>
              <button
                className={activeTab === "hotels" ? "active" : ""}
                onClick={() => setActiveTab("hotels")}
              >
                Hotels
              </button>
              <button
                className={activeTab === "cars" ? "active" : ""}
                onClick={() => setActiveTab("cars")}
              >
                Cars
              </button>
            </div>

            {(activeTab === "all" || activeTab === "flights") && favoriteFlights.length > 0 && (
              <section className="favorite-section">
                <div className="section-header">
                  <h3>Favorite Flights</h3>
                  <span className="badge">{favoriteFlights.length}</span>
                </div>
                {favoriteFlights.map((flight, index) => (
                  <div className="favorite-card flight-card" key={flight.favId || index}>
                    <div className="card-image">
                      <img src={flightImage} alt={flight.airlineName} />
                    </div>
                    <div className="card-content">
                      <div className="card-header">
                        <h4>{flight.airlineName}</h4>
                        <span className="flight-class">
                          {flight.flightNumber} &gt; {flight.cabinClass}
                        </span>
                        <img
                          src={favoriteIcon}
                          alt="Remove favorite"
                          className="favorited remove-favorite-icon"
                          onClick={() => toggleFavorite(flight, "flight")}
                        />
                      </div>
                      <div className="route-details">
                        <div className="origin">
                          <span className="code">{flight.originAirportCode}</span>
                          <span className="time">{flight.departureTime}</span>
                          <span className="date">{flight.departureDate}</span>
                        </div>
                        <div className="route-line">
                          <span className="duration">{flight.duration}</span>
                          <span className="stops">Nonstop</span>
                        </div>
                        <div className="destination">
                          <span className="code">{flight.destinationAirportCode}</span>
                          <span className="time">{flight.arrivalTime}</span>
                          <span className="date">{flight.arrivalDate}</span>
                        </div>
                      </div>
                      <div className="card-footer">
                        <span className="price" id="flight-price">
                          ${flight.priceUSD}</span>
                        <span className="per-person" id="per-person">
                          per person</span>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            )}

            {(activeTab === "all" || activeTab === "hotels") && favoriteHotels.length > 0 && (
              <section className="favorite-section">
                <div className="section-header">
                  <h3>Favorite Hotels</h3>
                  <span className="badge">{favoriteHotels.length}</span>
                </div>
                {favoriteHotels.map((hotel, index) => (
                  <div className="favorite-card hotel-card" key={hotel.favId || index}>
                    <div className="card-image">
                      <FavoriteImage image={hotel.image} name={hotel.name} />
                    </div>
                    <div className="card-content">
                      <div className="card-header">
                        <h4>{hotel.name}</h4>
                        <div className="rating">
                          <span className="stars">
                            {"★".repeat(hotel.rating)}
                            {"☆".repeat(5 - hotel.rating)}
                          </span>
                          <span className="rating-number">{hotel.reviewScore}</span>
                          <span className="rating-label">{hotel.reviewLabel}</span>
                        </div>
                        <img
                          src={favoriteIcon}
                          alt="Remove favorite"
                          className="favorited remove-favorite-icon"
                          onClick={() => toggleFavorite(hotel, "hotel")}
                        />
                      </div>
                      <div className="location">{hotel.address}</div>
                      <div className="card-footer">
                        <div className="pricing">
                          <span className="price">{hotel.price}</span>
                          <span className="per-night">/ night</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            )}

            {(activeTab === "all" || activeTab === "hotels") && favoriteHotels.length === 0 && activeTab === "hotels" && (
              <div className="favorites-empty">
                <p>No favorite hotels yet.</p>
              </div>
            )}

            {(activeTab === "all" || activeTab === "cars") && favoriteCars.length > 0 && (
              <section className="favorite-section">
                <div className="section-header">
                  <h3>Favorite Cars</h3>
                  <span className="badge">{favoriteCars.length}</span>
                </div>
                {favoriteCars.map((car, index) => (
                  <div className="favorite-card car-card" key={car.favId || index}>
                    <div className="card-image">
                      <FavoriteImage image={car.image} name={car.name} />
                    </div>
                    <div className="card-content">
                      <div className="card-header">
                        <h4>{car.name}</h4>
                        <span className="car-type">{car.type}</span>
                        <img
                          src={favoriteIcon}
                          alt="Remove favorite"
                          className="favorited remove-favorite-icon"
                          onClick={() => toggleFavorite(car, "car")}
                        />
                      </div>
                      <div className="car-specs">
                        <span className="seats">{car.seats} Seats</span>
                        <span className="transmission">{car.transmission}</span>
                      </div>
                      <div className="card-footer">
                        <div className="pricing">
                          <span className="price">${car.price}</span>
                          <span className="per-day">/ day</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            )}

            {(activeTab === "all" || activeTab === "cars") && favoriteCars.length === 0 && activeTab === "cars" && (
              <div className="favorites-empty">
                <p>No favorite cars yet.</p>
              </div>
            )}

            <div className="favorites-footer">
              <p>Items saved to your favorites are available across all your devices.</p>
              <a href="#" className="logout">
                Log out
              </a>
            </div>
          </>
        )}

        <nav>
          <div className='nav-container'>
            <img src={homeIcon} alt="House icon"
              title="Go back home" className='nav-home'
              onClick={() => navigate('/dashboard')}
            />
            <p>Home</p>
          </div>

          <div className='nav-container'
            onClick={() => navigate('/bookings')}
          >
            <img src={bookingIcon2} alt="Search icon"
              title="Book a Hotel/Cars/Destination"
              className='nav-search'
            />
            <p>Bookings</p>
          </div>

          <div className='nav-container'
            onClick={() => navigate('/favorite')}
          >
            <img src={favoriteIcon} alt="Favourite icon"
              title="Favorite Flights" className='nav-favorite'
            />
            <p>Favorites</p>
          </div>

          <div className='nav-container'>
            <img src={profileIcon} alt="Profile icon"
              title="Edit Profile" className='nav-profile'
              onClick = {() => navigate('/profile')}
            />
            <p>Profile</p>
          </div>
        </nav>

      </div>
    </>
  );
};
export default Favorite;