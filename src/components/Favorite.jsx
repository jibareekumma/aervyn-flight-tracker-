// FavoritesPage.jsx
import React, { useState } from "react";
import "../css/Favorite.css";

// Import images
import flightImage from "/photos/flight_booking_img.jpeg";
import hotelImage from "/photos/hotel_booking_image.jpeg";
import carImage from "/photos/car_image_booking.jpeg";

// Import icons
import bookingIcon2 from "/icons/booking_icon2.png";

const Favorite = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Flight data
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

  // Hotel data
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

  // Car data
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

  return (
    <div className="favorites-page">
      {/* Header */}
      <header className="favorites-header">
        <h1 className="brand">Aervyn</h1>
        <h2 className="page-title">Favorites</h2>
      </header>

      {/* Filter Tabs */}
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

      {/* Favorite Flights Section */}
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
                  <span className="price">{flight.price}</span>
                  <span className="per-person">per person</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Favorite Hotels Section */}
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

      {/* Favorite Cars Section */}
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

      {/* Footer */}
      <div className="favorites-footer">
        <p>Items saved to your favorites are available across all your devices.</p>
        <a href="#" className="logout">
          Log out
        </a>
      </div>

      
    </div>
  );
};

export default Favorite;