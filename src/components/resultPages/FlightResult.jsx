

import dummyFlag from "/photos/usa_flag.png"
import favoriteIcon from "/icons/favorite_icon.png"
import leftArrow from "/icons/left_arrow_icon.png"
import rightArrow from "/icons/right_arr.png"
import selectArrow from "/icons/select arrow.png"
import twoSideArrow from "/icons/two_side_arrow.png"
import dotIcon from "/icons/dot_icon.png"


import { useNavigate } from "react-router-dom"


import "../../css/Result.css"

const FlightResult = function(){


    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long', 
        day: 'numeric',
        month: 'long'
    })

    const navigate = useNavigate()


    return <>

        <body className="result-container">
            
        
        
        <div className = 'result-header'
            id = "flight-result-header">


            <section className = 'search-details'>
                <div className = 'header-text-section'>
                <div className="icon-container">
                    <img src = {leftArrow} 
                    alt="Arrow Towards left" loading = "lazy"
                     onClick = {() => navigate('/dashboard')}
                    />
                </div>

                <div className = 'text-container'>

                    <div className = 'locations'>
                    <h5>Lagos</h5>
                    <img src = {rightArrow} 
                    alt="Arrow Towards right" loading = "lazy" 
                   
                    />
                    <h5>London</h5>
                    </div>

                    <div className="dates">
                        <p>{today}</p>
                        <span>.</span>
                        <p>1 Adult</p>
                            <span>.</span>
                        <p>Economy</p>
                    </div>
                
                </div>
                </div>

                <button className = "header-btn">
                    Edit Search
                </button>
            </section>


            <nav className="result-nav">
                <div className = "nav-item">
               <p>Best</p>
               <img src = {selectArrow} 
               alt="Arrow select" 
               loading = "lazy"
               />
               </div>

               <div className = "nav-item">
               <p>Price</p>
               <img src = {selectArrow} 
               alt="Arrow select" 
               loading = "lazy"
               />
               </div>

               <div className = "nav-item">
               <p>Shops</p>
               <img src = {selectArrow} 
               alt="Arrow select" 
               loading = "lazy"
               />
               </div>

               <div className = "nav-item">
               <p>Airlines</p>
               <img src = {selectArrow} 
               alt="Arrow select" 
               loading = "lazy"
               />
               </div>
            </nav>
        </div>


        <div className = 'result-main'>
            <h6>20 Flights Found</h6>
            
            <section className = 'details-container'>

            <div className = 'details-item'>
                <div className="airline-name">
                    <img src = {dummyFlag} 
                    alt="Country Flag" loading="lazy"/>
                    <p>Bristish Airways</p>
                </div>
                <div className="time-details">
                    <div className = 'one'>
                        <h5>08:30</h5>
                        <p>LOS</p>
                    </div>
                    <div className = 'two'>
                        <p>7h 40m</p>
                        <img src = {twoSideArrow} 
                        alt="Two side arrow" />
                        <p>Direct</p>
                    </div>
                    <div className = 'one'>
                        <h5>15:15</h5>
                        <p>LHR</p>
                    </div>
                </div>
                <div className = 'price-detail'>
                    <div className = 'price-detail-item'>
                    <h4>$420</h4>
                    <p>/person</p>
                    </div>
                    <img src = {favoriteIcon} 
                    alt="Add to favorite" title="Add to favorite" 
                    loading = "lazy"
                    />
                </div>
            </div>


            <div className = 'details-item'>
                <div className="airline-name">
                    <img src = {dummyFlag} 
                    alt="Country Flag" loading="lazy"/>
                    <p>Emirates</p>
                </div>
                <div className="time-details">
                    <div className = 'one'>
                        <h5>09:15</h5>
                        <p>LOS</p>
                    </div>
                    <div className = 'two'>
                        <p>9h 10m</p>
                        <img src = {twoSideArrow} 
                        alt="Two side arrow" />
                        <p>1 Stop</p>
                    </div>
                    <div className = 'one'>
                        <h5>18:00</h5>
                        <p>LHR</p>
                    </div>
                </div>
                <div className = 'price-detail'>
                    <div className = 'price-detail-item'>
                    <h4>$395</h4>
                    <p>/person</p>
                    </div>
                    <img src = {favoriteIcon} 
                    alt="Add to favorite" title="Add to favorite" 
                    loading = "lazy"
                    />
                </div>
            </div>

             <div className = 'details-item'>
                <div className="airline-name">
                    <img src = {dummyFlag} 
                    alt="Country Flag" loading="lazy"/>
                    <p>Turkish Airlines</p>
                </div>
                <div className="time-details">
                    <div className = 'one'>
                        <h5>11:45</h5>
                        <p>LOS</p>
                    </div>
                    <div className = 'two'>
                        <p>10h 25m</p>
                        <img src = {twoSideArrow} 
                        alt="Two side arrow" />
                        <p>1 Stop</p>
                    </div>
                    <div className = 'one'>
                        <h5>22:00</h5>
                        <p>LHR</p>
                    </div>
                </div>
                <div className = 'price-detail'>
                    <div className = 'price-detail-item'>
                    <h4>$385</h4>
                    <p>/person</p>
                    </div>
                    <img src = {favoriteIcon} 
                    alt="Add to favorite" title="Add to favorite" 
                    loading = "lazy"
                    />
                </div>
            </div>

            </section>



        </div>

        </body>

    </>
}


export default FlightResult 