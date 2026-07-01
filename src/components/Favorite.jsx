

import React, { useState } from "react";
import "../css/Favorite.css";
import FooterNavigation from "./FooterNavigation";
import flightImage from "/photos/flight_booking_img.jpeg";
import hotelImage from "/photos/hotel_booking_image.jpeg";
import carImage from "/photos/car_image_booking.jpeg";
import bookingIcon2 from "/icons/booking_icon2.png";
import favoriteIcon from "/icons/favorite_icon.png"
import mainIcon from "/icons/main-icon.png"
import homeIcon from "/icons/home_icon.png"
import profileIcon from "/icons/profile_icon 2.png"
import calendarIcon from "/icons/bell_icon.png"
import settingsIcon from "/icons/spin-rotate.png"



import searchIcon from "/icons/search_icon.png"
import { useNavigate } from "react-router-dom";

const Favorite = () => {
  const [activeTab, setActiveTab] = useState("all");
  const flights = [
    {
      airline: "Turkish Airlines",
      flight: "TK 622",
      class: "Economy",
      from: "LHR",
      duration: "11h 40m",
      stops: "1 Stop (IST)",
      to: "LHR",
      arrival: "20:10",
      date: "12 Jun",
      price: "$499",
    },
    {
      airline: "Emirates",
      flight: "EK 783",
      class: "Economy",
      from: "LHR",
      duration: "9h 30m",
      stops: "1 Stop (DXB)",
      to: "LHR",
      arrival: "18:45",
      date: "15 Jun",
      price: "$620",
    },
    {
      airline: "British Airways",
      flight: "BA 075",
      class: "Economy",
      from: "LHR",
      duration: "7h 55m",
      stops: "Direct",
      to: "LHR",
      arrival: "06:35",
      date: "18 Jun",
      price: "$410",
    },
  ];
  const hotels = [
    {
      name: "Claridge's (Mayfair)",
      stars: 5,
      rating: 8.7,
      location: "Mayfair, London",
      price: "$180",
      originalPrice: "$225",
    },
    {
      name: "The Langham, London",
      stars: 5,
      rating: 9.1,
      location: "Portland Place, London",
      price: "$225",
      originalPrice: "$320",
    },
    {
      name: "Shangri-La The Shard",
      stars: 5,
      rating: 9.0,
      location: "London Bridge, London",
      price: "$320",
      originalPrice: "$320",
    },
  ];
  const cars = [
    {
      name: "Tesla Model 3",
      type: "Electric",
      seats: "5 Seats",
      transmission: "Automatic",
      price: "$55",
    },
    {
      name: "Toyota RAV4",
      type: "SUV",
      seats: "5 Seats",
      transmission: "Automatic",
      price: "$48",
    },
    {
      name: "BMW 3 Series",
      type: "Luxury",
      seats: "5 Seats",
      transmission: "Automatic",
      price: "$75",
    },
  ];
  const navigate = useNavigate();
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
        {(activeTab === "all" || activeTab === "flights") && (
          <section className="favorite-section">
            <div className="section-header">
              <h3>Favorite Flights</h3>
              <span className="badge">3</span>
              <a href="#" className="view-all">
                View all flights →
              </a>
            </div>
            {flights.map((flight, index) => (
              <div className="favorite-card flight-card" key={index}>
                <div className="card-image">
                  <img src={flightImage} alt={flight.airline} />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h4>{flight.airline}</h4>
                    <span className="flight-class">
                      {flight.flight} &gt; {flight.class}
                    </span>
                  </div>
                  <div className="route-details">
                    <div className="origin">
                      <span className="code">{flight.from}</span>
                      <span className="time">{flight.arrival}</span>
                      <span className="date">{flight.date}</span>
                    </div>
                    <div className="route-line">
                      <span className="duration">{flight.duration}</span>
                      <span className="stops">{flight.stops}</span>
                    </div>
                    <div className="destination">
                      <span className="code">{flight.to}</span>
                      <span className="time">{flight.arrival}</span>
                      <span className="date">{flight.date}</span>
                    </div>
                  </div>
                  <div className="card-footer">
                    <span className="price" id="flight-price">
                      {flight.price}</span>
                    <span className="per-person" id="per-person">
                      per person</span>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}
        {(activeTab === "all" || activeTab === "hotels") && (
          <section className="favorite-section">
            <div className="section-header">
              <h3>Favorite Hotels</h3>
              <span className="badge">3</span>
              <a href="#" className="view-all">
                View all hotels →
              </a>
            </div>
            {hotels.map((hotel, index) => (
              <div className="favorite-card hotel-card" key={index}>
                <div className="card-image">
                  <img src={hotelImage} alt={hotel.name} />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h4>{hotel.name}</h4>
                    <div className="rating">
                      <span className="stars">
                        {"★".repeat(hotel.stars)}
                        {"☆".repeat(5 - hotel.stars)}
                      </span>
                      <span className="rating-number">{hotel.rating}</span>
                      <span className="rating-label">Excellent</span>
                    </div>
                  </div>
                  <div className="location">{hotel.location}</div>
                  <div className="card-footer">
                    <div className="pricing">
                      <span className="price">{hotel.price}</span>
                      <span className="per-night">/ night</span>
                      {hotel.originalPrice && hotel.originalPrice !== hotel.price && (
                        <span className="original-price">{hotel.originalPrice}</span>
                      )}
                    </div>
                    <a href="#" className="view-details">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}
        {(activeTab === "all" || activeTab === "cars") && (
          <section className="favorite-section">
            <div className="section-header">
              <h3>Favorite Cars</h3>
              <span className="badge">3</span>
              <a href="#" className="view-all">
                View all cars →
              </a>
            </div>
            {cars.map((car, index) => (
              <div className="favorite-card car-card" key={index}>
                <div className="card-image">
                  <img src={carImage} alt={car.name} />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h4>{car.name}</h4>
                    <span className="car-type">{car.type}</span>
                  </div>
                  <div className="car-specs">
                    <span className="seats">{car.seats}</span>
                    <span className="transmission">{car.transmission}</span>
                  </div>
                  <div className="card-footer">
                    <div className="pricing">
                      <span className="price">{car.price}</span>
                      <span className="per-day">/ day</span>
                    </div>
                    <a href="#" className="view-details">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}
        <div className="favorites-footer">
          <p>Items saved to your favorites are available across all your devices.</p>
          <a href="#" className="logout">
            Log out
          </a>
        </div>
        

        <nav>
                    <div className = 'nav-container'>
                   <img src = {homeIcon} alt="House icon"
                   title = "Go back home" className='nav-home'
                   onClick = {() => navigate('/dashboard')}
                   />
                   <p>Home</p>
                   </div>
        
                    <div className = 'nav-container'
                    onClick = {() => navigate('/bookings')}
                    >
                   <img src = {bookingIcon2} alt="Search icon"
                   title = "Book a Hotel/Cars/Destination" 
                   className='nav-search'
                   
                   />
                   <p>Bookings</p>
                   </div>
        
                    <div className = 'nav-container'
                    onClick = { () => navigate('/favorite') }
                    >
                   <img src = {favoriteIcon} alt="Favourite icon"
                   title = "Favorite Flights" className='nav-favorite'
                   
                   />
                   <p>Favorites</p>
                   </div>
        
                    <div className = 'nav-container'>
                   <img src = {profileIcon} alt="Profile icon"
                   title = "Edit Profile" className='nav-profile'
                   />
                   <p>Profile</p>
                   </div>
                </nav>

      </div>
    </>
  );
};
export default Favorite;