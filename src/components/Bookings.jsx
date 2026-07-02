


import React, { useState } from "react";



import flightImage from "/photos/flight_booking_img.jpeg"
import hotelImage from "/photos/hotel_booking_image.jpeg"
import carImage from "/photos/car_image_booking.jpeg"

import bookingIcon2 from "/icons/booking_icon2.png"
import locationIcon from "/icons/location.png"

// Sidebar icons (same set used in Dashboard.jsx)
import mainIcon from "/icons/main-icon.png"
import homeIcon from "/icons/home_icon.png"
import favoriteIcon from "/icons/favorite_icon.png"
import profileIcon from "/icons/profile_icon 2.png"
import calendarIcon from "/icons/bell_icon.png"
import settingsIcon from "/icons/spin-rotate.png"

import "../css/Bookings.css"
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("upcoming");

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
          <div className="sidebar-icon active">
            <img src={bookingIcon2} alt="bookings" />
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

      <div className="booking-page">

        <div className="booking-header">
          <img src={bookingIcon2}
            alt="Booking icon" />
          <h1 className="brand">
            My Bookings</h1>

        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All Bookings
          </button>
          <button
            className={filter === "flights" ? "active" : ""}
            onClick={() => setFilter("flights")}
          >
            Flights
          </button>
          <button
            className={filter === "hotels" ? "active" : ""}
            onClick={() => setFilter("hotels")}
          >
            Hotels
          </button>
          <button
            className={filter === "cars" ? "active" : ""}
            onClick={() => setFilter("cars")}
          >
            Cars
          </button>
        </div>

        {/* Upcoming Section */}
        <section className="trip-section">
          <div className="section-header">
            <h3>Upcoming Trips</h3>
            <span className="badge">3</span>
          </div>

          {/* Flight Card */}
          <div className="trip-card flight-card">
            <div className="container">
              <img src={flightImage}
                alt="Image of flight" loading="lazy" />
              <div className='trip-container'>
                <div className="card-header">
                  <span className="trip-type">Flight</span>
                  <span className="price">$499</span>
                </div>
                <h4>Lagos → London</h4>
                <div className="trip-meta">
                  <span>Mon, Jun 22 - 1 Passenger</span>
                </div>
                <div className="route-details">
                  <div className="airport">
                    <span className="code">LOS</span>
                    <span className="time">08:30</span>
                    <span className="city">Lagos</span>
                  </div>
                  <div className="route-line">
                    <span className="stops">1 Stop (IST)</span>
                  </div>
                  <div className="airport">
                    <span className="code">LHR</span>
                    <span className="time">20:10</span>
                    <span className="city">London</span>
                  </div>
                </div>

              </div>

            </div>
            <div className="card-footer">
              <span className="ref">
                Booking Ref AVN12345</span>
              <span className="class">Economy</span>
            </div>
          </div>


          {/* Hotel Card */}
          <div className="trip-card hotel-card">
            <div className="container">
              <img src={hotelImage}
                alt="Image of flight" loading="lazy" />
              <div className='trip-container'>
                <div className="card-header">
                  <span className="trip-type">Hotel</span>
                  <span className="price">$540</span>
                </div>
                <h4>Claridge(Mayfair)</h4>
                <div className="trip-meta">
                  <span>Jun 22 - Jun 25 - 2 Guest</span>
                </div>
                <div className="card-info-container">
                  <img src={locationIcon}
                    alt="Location Icon" loading="lazy"
                    id="card-info-icon" />
                  <p>MayFair, London</p>
                </div>
              </div>

            </div>
            <div className="card-footer">
              <span className="ref">
                AVN67890</span>
              <span className="class">Deluxe Room</span>
            </div>
          </div>



          {/* Car Card */}
          <div className="trip-card hotel-card">
            <div className="container">
              <img src={carImage}
                alt="Image of flight" loading="lazy" />
              <div className='trip-container'>
                <div className="card-header">
                  <span className="trip-type">Car</span>
                  <span className="price">$165</span>
                </div>
                <h4>Tesla Model 3</h4>
                <div className="trip-meta">
                  <span>Jun 22 - Jun 25</span>
                </div>
                <div className="card-info-container">
                  <img src={locationIcon}
                    alt="Location Icon" loading="lazy"
                    id="card-info-icon" />
                  <p>London Heathrow (LHR)</p>
                </div>
              </div>

            </div>
            <div className="card-footer">
              <span className="ref">
                5 Seats</span>
              <span className="class">Luxury Car</span>
            </div>
          </div>




        </section>

        {/* Past Trips Section */}


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
                   onClick = {() => navigate('/profile')}
                   />
                   <p>Profile</p>
                   </div>
                </nav>
      </div>
    </>
  );
};

export default Bookings;