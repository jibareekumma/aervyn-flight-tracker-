



import React, { useState } from "react";


// Icons (replace with your actual imports)
// import flightIcon from "/icons/flight_icon.png";
// import hotelIcon from "/icons/hotel_icon.png";
// import carIcon from "/icons/car_icon.png";
// import sortIcon from "/icons/sort_icon.png";
// import helpIcon from "/icons/help_icon.png";

import bookingIcon2 from "/icons/booking_icon2.png"


import "../css/Bookings.css"

const Bookings = () => {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("upcoming");

  return (
    <div className="booking-page">
      
      <div className="booking-header">
         <img src = {bookingIcon2} 
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
          <div className="card-footer">
            <span className="ref">Booking Ref AVN12345</span>
            <span className="class">Economy</span>
          </div>
        </div>

        {/* Hotel Card */}
        <div className="trip-card hotel-card">
          <div className="card-header">
            <span className="trip-type">Hotel</span>
            <span className="price">$540</span>
          </div>
          <h4>Claridge's (Mayfair)</h4>
          <div className="trip-meta">
            <span>Mon, Jun 22 - Thu, Jun 25</span>
            <span>2 Guests - 1 Room</span>
          </div>
          <div className="location">Mayfair, London</div>
          <div className="card-footer">
            <span className="ref">Booking Ref AVN67890</span>
            <span className="class">Deluxe Room</span>
          </div>
        </div>

        {/* Car Card */}
        <div className="trip-card car-card">
          <div className="card-header">
            <span className="trip-type">Car</span>
            <span className="price">$165</span>
          </div>
          <h4>Tesla Model 3</h4>
          <div className="trip-meta">
            <span>Mon, Jun 22 - Wed, Jun 25</span>
            <span>5 Seats - Automatic</span>
          </div>
          <div className="location">London Heathrow Airport (LHR)</div>
          <div className="pickup-time">10:00 AM</div>
          <div className="card-footer">
            <span className="ref">Booking Ref AVN24680</span>
            <span className="class">3 Days</span>
          </div>
        </div>
      </section>

      {/* Past Trips Section */}
      <section className="trip-section past">
        <div className="section-header">
          <h3>Past Trips</h3>
          <span className="badge">2</span>
        </div>

        {/* Past Flight */}
        <div className="trip-card past-flight">
          <div className="card-header">
            <span className="trip-type">Flight</span>
            <span className="price">$470</span>
          </div>
          <h4>London → Lagos</h4>
          <div className="trip-meta">
            <span>Tue, May 12 - 1 Passenger</span>
          </div>
          <div className="route-details">
            <div className="airport">
              <span className="code">LHR</span>
              <span className="time">10:15</span>
              <span className="city">London</span>
            </div>
            <div className="route-line">
              <span className="stops">9h 20m</span>
              <span className="direct">Direct</span>
            </div>
            <div className="airport">
              <span className="code">LOS</span>
              <span className="time">20:35</span>
              <span className="city">Lagos</span>
            </div>
          </div>
          <div className="card-footer">
            <span className="ref">Booking Ref</span>
            <span className="class">Economy</span>
          </div>
        </div>

        {/* Past Hotel */}
        <div className="trip-card past-hotel">
          <div className="card-header">
            <span className="trip-type">Hotel</span>
            <span className="price">$680</span>
          </div>
          <h4>The Langham, London</h4>
          <div className="trip-meta">
            <span>May 5 - May 8 - 2 Guests</span>
          </div>
          <div className="location">Portland Place, London</div>
          <div className="card-footer">
            <span className="ref">Booking Ref</span>
            <span className="class">Executive Room</span>
          </div>
        </div>
      </section>

      {/* Help Center Link */}
      <div className="help-center">
        <a href="#">Can't find your booking? Visit our Help Center</a>
      </div>

      {/* Mobile Bottom Navigation (matches image) */}
      <nav className="mobile-bottom-nav">
        <button className="nav-item">
          <img src="/icons/home_icon.png" alt="Home" />
          <span>Home</span>
        </button>
        <button className="nav-item">
          <img src="/icons/search_icon.png" alt="Flights" />
          <span>Flights</span>
        </button>
        <button className="nav-item active">
          <img src="/icons/booking_icon2.png" alt="Bookings" />
          <span>Bookings</span>
        </button>
        <button className="nav-item">
          <img src="/icons/favorite_icon.png" alt="Favorites" />
          <span>Favorites</span>
        </button>
        <button className="nav-item">
          <img src="/icons/profile_icon 2.png" alt="Profile" />
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default Bookings;