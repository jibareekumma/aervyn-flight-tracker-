




import dummyFlag from "/photos/usa_flag.png"
import favoriteIcon from "/icons/favorite_icon.png"
import leftArrow from "/icons/left_arrow_icon.png"
import rightArrow from "/icons/right_arr.png"
import selectArrow from "/icons/select arrow.png"
import twoSideArrow from "/icons/two_side_arrow.png"
import dotIcon from "/icons/dot_icon.png"
import rightArrowDsk from "/icons/right_arrow_dsk.png"
import leftArrowDsk from "/icons/left_arrow_dsk.png"

import homeIcon from "/icons/home_icon.png"
import searchIcon from "/icons/search_icon.png"
import profileIcon from "/icons/profile_icon 2.png"
import mainIcon from "/icons/main-icon.png"
import calendarIcon from "/icons/bell_icon.png"
import settingsIcon from "/icons/spin-rotate.png"
import starIcon from "/icons/star icon.png"
import visitSite from "/icons/visit-site.png"


import hotel1 from "/photos/hotel1.jpeg"
import hotel2 from "/photos/hotel2.jpeg"
import hotel3 from "/photos/hotel3.jpeg"


import { useNavigate } from "react-router-dom"


import "../../css/Result.css"
// import "../../css/Header.css"

const HotelResult = function () {


    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    })

    const today2 = new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long'
    })

    const navigate = useNavigate()


    return <>


    


        <div className="result-container">


        <aside className="desktop-sidebar">
                        <div className="sidebar-top">
                            <img src = {mainIcon}
                            alt="logo" className="sidebar-logo" />
                        </div>
        
                        <div className="sidebar-icons">
                            <div className="sidebar-icon active">
                                <img src={homeIcon} alt="home" />
                            </div>
                            <div className="sidebar-icon">
                                <img src={searchIcon} alt="search" />
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



            <div className='result-header'
                id="flight-result-header">

                <section className='search-details'>
                    <div className='header-text-section'>
                        <div className="icon-container">
                            <img src={leftArrow}
                                alt="Arrow Towards left" loading="lazy"
                                onClick={() => navigate('/dashboard')}
                            />
                        </div>

                        <div className='text-container'>

                            <div className='locations'>
                                <h5>Lagos</h5>
                                <img src={rightArrow}
                                    alt="Arrow Towards right" loading="lazy"

                                />
                                <h5>London</h5>
                            </div>

                            <div className="dates">
                                <p>{today}</p>
                                <span>.</span>
                                <p>2 Guests</p>
                                
                            </div>

                        </div>
                    </div>

                    <button className="header-btn">
                        Edit Search
                    </button>
                </section>


                <nav className="result-nav">
                    

                    <div className="nav-item">
                        <p>Price</p>
                        <img src={selectArrow}
                            alt="Arrow select"
                            loading="lazy"
                        />
                    </div>

                    <div className="nav-item">
                        <p>Amenities</p>
                        <img src={selectArrow}
                            alt="Arrow select"
                            loading="lazy"
                        />
                    </div>

                    <div className="nav-item">
                        <p>Filter</p>
                        <img src={selectArrow}
                            alt="Arrow select"
                            loading="lazy"
                        />
                    </div>
                </nav>
            </div>


            <div className='result-main'>
                <h6>342 Hotels Found</h6>

                <section className='details-container'>

                    <div className='details-item' id = "details-item-hotel">

                        <img src = {hotel2} alt="Image of hotel"
                        loading = 'lazy' className = "item-photo"
                        />
                        <div className="item-details">
                            <h5>Claridge's (Mayfair)</h5>
                            <div className = 'stars-container'>
                                <img src={starIcon} alt="Star" loading="lazy"/>
                                <img src={starIcon} alt="Star" loading="lazy"/>
                                <img src={starIcon} alt="Star" loading="lazy"/>
                                <img src={starIcon} alt="Star" loading="lazy"/>
                                <img src={starIcon} alt="Star" loading="lazy"/>
                            </div>
                            <div className = "rating">
                                <h6>8.7</h6>
                                <p>Excellent</p>
                            </div>
                            <div className = "pecs">
                                <span>Free WiFi</span>
                                <span>Gym</span>
                                
                            </div>
                        </div>
                        <div className="item-action">
                            <div>
                                <img src = {visitSite} 
                                alt="Visit site icon"  loading = "lazy"
                                className="site-icon"/>
                                <p>Excellent</p>
                            </div>

                            <img src = {favoriteIcon} alt="favorite icon" 
                            loading = "lazy"
                            className="favorite-icon"
                            />
                        </div>

                    </div>



                    <div className='details-item' id = "details-item-hotel">

                        <img src = {hotel3} alt="Image of hotel"
                        loading = 'lazy' className = "item-photo"
                        />
                        <div className="item-details">
                            <h5>Brown's Hotel</h5>
                            <div className = 'stars-container'>
                                <img src={starIcon} alt="Star" loading="lazy"/>
                                <img src={starIcon} alt="Star" loading="lazy"/>
                                <img src={starIcon} alt="Star" loading="lazy"/>
                                <img src={starIcon} alt="Star" loading="lazy"/>
                                <img src={starIcon} alt="Star" loading="lazy"/>
                            </div>
                            <div className = "rating">
                                <h6>8.0</h6>
                                <p>Excellent</p>
                            </div>
                            <div className = "pecs">
                                <span>Free WiFi</span>
                                <span>Gym</span>
                                <span>Spa</span>
                            </div>
                        </div>
                        <div className="item-action">
                            <div>
                                <img src = {visitSite} 
                                alt="Visit site icon"  loading = "lazy"
                                className="site-icon"
                                />
                                <p>Excellent</p>
                            </div>

                            <img src = {favoriteIcon} alt="favorite icon" 
                            loading = "lazy"
                            className="favorite-icon"
                            />
                        </div>

                    </div>



                    <div className='details-item' id = "details-item-hotel">

                        <img src = {hotel1} alt="Image of hotel"
                        loading = 'lazy' className = "item-photo"
                        />
                        <div className="item-details">
                            <h5>The Connaught Hotel</h5>
                            <div className = 'stars-container'>
                                <img src={starIcon} alt="Star" loading="lazy"/>
                                <img src={starIcon} alt="Star" loading="lazy"/>
                                <img src={starIcon} alt="Star" loading="lazy"/>
                                <img src={starIcon} alt="Star" loading="lazy"/>
                                <img src={starIcon} alt="Star" loading="lazy"/>
                            </div>
                            <div className = "rating">
                                <h6>9.2</h6>
                                <p>Excellent</p>
                            </div>
                            <div className = "pecs">
                                <span>Free WiFi</span>
                                <span>Gym</span>
                                <span>Breakfast</span>
                            </div>
                        </div>
                        <div className="item-action">
                            <div>
                                <img src = {visitSite} 
                                alt="Visit site icon"  loading = "lazy"
                                className="site-icon"
                                />
                                <p>Excellent</p>
                            </div>

                            <img src = {favoriteIcon} alt="favorite icon" 
                            loading = "lazy"
                            className="favorite-icon"
                            />
                        </div>

                    </div>


                </section>



            </div>

        </div>

    </>
}


export default HotelResult 