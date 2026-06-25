

import homeIcon from "/icons/home_icon.png"
import searchIcon from "/icons/search_icon.png"
import favoriteIcon from "/icons/favorite_icon.png"
import profileIcon from "/icons/profile_icon 2.png"


import discountIcon from "/icons/discount_icon.png"
import customerSupportIcon from "/icons/customer-support.png"
import bookingIcon from "/icons/booking_icon.png"
import flexibleIcon from "/icons/flexible_icon.png"


import "../css/FooterNavigation.css"
import { useNavigate } from "react-router-dom"

const FooterNavigation = function(){

    const navigate = useNavigate();

    return <>

        <nav>
            <div className = 'nav-container'>
           <img src = {homeIcon} alt="House icon"
           title = "Go back home" className='nav-home'
           />
           <p>Home</p>
           </div>

            <div className = 'nav-container'>
           <img src = {searchIcon} alt="Search icon"
           title = "Search a destination" 
           className='nav-search'
           />
           <p>Search</p>
           </div>

            <div className = 'nav-container'>
           <img src = {favoriteIcon} alt="Favourite icon"
           title = "Favorite Flights" className='nav-favorite'
           onClick = { () => navigate('/favorite') }
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


        <div className='desktop-nav-dsk'>

    <div className='dsk-info-container'>
        <div className='icon'>
            <img src={discountIcon} alt="Price icon" />
        </div>
        <div className='texts'>
            <h6>Best Price Guarantee</h6>
            <p>We ensure you get the best deals on flights</p>
        </div>
    </div>

    <div className='dsk-info-container'>
        <div className='icon'>
            <img src={customerSupportIcon} alt="Price icon" />
        </div>
        <div className='texts'>
            <h6>24/7 Support</h6>
            <p>We're here to help anytime</p>
        </div>
    </div>

    <div className='dsk-info-container'>
        <div className='icon'>
            <img src={bookingIcon} alt="Price icon" />
        </div>
        <div className='texts'>
            <h6>Secure Booking</h6>
            <p>Your booking data is safe with us</p>
        </div>
    </div>

    <div className='dsk-info-container'>
        <div className='icon'>
            <img src={flexibleIcon} alt="Price icon" />
        </div>
        <div className='texts'>
            <h6>Flexible Options</h6>
            <p>Change or cancel flights with ease</p>
        </div>
    </div>

</div>
    </>
}


export default FooterNavigation