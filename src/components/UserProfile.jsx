

import pfp from "/photos/pfp 1.jpg"


import pencilIcon from "/icons/pencil_icon.png"
import searchIcon from "/icons/search_icon.png"
import bookingIcon from "/icons/booking_icon.png"
import favoriteIcon from "/icons/favorite_icon.png"
import logoutIcon from "/icons/logout_icon.png"
import openIcon from "/icons/open_icon.png"


import homeIcon from "/icons/home_icon.png"
import profileIcon from "/icons/profile_icon 2.png"
import bookingIcon2 from "/icons/booking_icon2.png"



import "../css/UserProfile.css"
const UserProfile = function(  ){

    return<>
        <div className = 'profile-container'>


            <div className = "profile-header">
                <h4>User Aervyn Profile</h4>
            </div>



            <div className="profile-details">
                <div className="profile-image-container">
                    <div className = "profile-avatar">
                        <img src = {pfp} 
                        alt="User profile photo" 
                        loading="lazy" />
                        <div className = 'icon-container'>
                            <img src = {pencilIcon} 
                            alt="Icon of pencil" loading = 'lazy' />
                        </div>
                    </div>
                </div>
                <h4>User Name</h4>
                <p>usermail@example.com</p>
            </div>



            <div className = 'profile-links'>

                <div className = 'link-item'>
                    <img src = {pencilIcon} alt="Item Icon"
                    loading="lazy" className="link-icon"
                    />
                    <p>Edit Profile</p>
                    <img src = {openIcon} alt="Open icon" 
                    loading="lazy" className="open-icon"
                    />
                </div>

                <div className = 'link-item'>
                    <img src = {searchIcon} alt="Search Icon"
                    loading="lazy" className="link-icon"
                    />
                    <p>Search Flights</p>
                    <img src = {openIcon} alt="Open icon" 
                    loading="lazy" className="open-icon"
                    />
                </div>

                <div className = 'link-item'>
                    <img src = {bookingIcon} alt="Item Icon"
                    loading="lazy" className="link-icon"
                    />
                    <p>Bookings</p>
                    <img src = {openIcon} alt="Open icon" 
                    loading="lazy" className="open-icon"
                    />
                </div>

                <div className = 'link-item'>
                    <img src = {favoriteIcon} alt="Item Icon"
                    loading="lazy" className="link-icon"
                    />
                    <p>Favorites</p>
                    <img src = {openIcon} alt="Item icon" 
                    loading="lazy" className="open-icon"
                    />
                </div>

                <div className = 'link-item link-item-last'>
                    <img src = {logoutIcon} alt="Item Icon"
                    loading="lazy" className="link-icon"
                    />
                    <p>Log Out</p>
                    <img src = {openIcon} alt="Item icon" 
                    loading="lazy" className="open-icon"
                    />
                </div>

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
                       onClick = {() => navigate('/profile')}
                       />
                       <p>Profile</p>
                       </div>
                    </nav>
        </div>
    </>
}

export default UserProfile;