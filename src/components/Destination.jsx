

// Photos Imports
import tailandMbl from "/photos/mobile/bangkuk mbl.jpg"
import canadaMbl from "/photos/mobile/canada mbl.jpg"
import franceMbl from "/photos/mobile/france mbl.jpeg"
import turkeyMBl from "/photos/mobile/istanbul mbl.jpg"
import japanMbl from "/photos/mobile/japan mbl.jpeg"
import italyMBl from "/photos/mobile/rome mbl.jpg"
import saMbl from "/photos/mobile/SA mbl.jpg"
import dubaiMbl from "/photos/mobile/UAE mbl.jpeg"
import ukMbl  from "/photos/mobile/UK mbl.jpeg"
import usaMbl from "/photos/mobile/usa mbl.jpeg"


import redirectIcon from "/icon/redirect icon.png"


const Destination = function(){

    return <>
    
    <section className = 'destination-section'
       >
        <div className = 'texts'>
            <h6>Popular Destinations</h6>
            <a href="">View all</a>
        </div>

        <div className = 'cities'>

            <div className = 'city'>
                <div className = 'inner-container'>
                    <div className = 'inner-text'>
                        <h6>Bangkok</h6>
                        <p>from <b>$780</b></p>
                    </div>
                    <div className = 'redirect-btn'>
                        <img src = {redirectIcon} 
                        alt="redirect icon" 
                        loading = 'lazy' />
                    </div>
                </div>
            </div>

            <div className = 'city'>
                <div className = 'inner-container'>
                    <div className = 'inner-text'>
                        <h6>Toronto</h6>
                        <p>from <b>$900</b></p>
                    </div>
                    <div className = 'redirect-btn'>
                        <img src = {redirectIcon} 
                        alt="redirect icon" 
                        loading = 'lazy' />
                    </div>
                </div>
            </div>

            <div className = 'city'>
                <div className = 'inner-container'>
                    <div className = 'inner-text'>
                        <h6>Paris</h6>
                        <p>from <b>$580</b></p>
                    </div>
                    <div className = 'redirect-btn'>
                        <img src = {redirectIcon} 
                        alt="redirect icon" 
                        loading = 'lazy' />
                    </div>
                </div>
            </div>

            <div className = 'city'>
                <div className = 'inner-container'>
                    <div className = 'inner-text'>
                        <h6>Istanbul</h6>
                        <p>from <b>$540</b></p>
                    </div>
                    <div className = 'redirect-btn'>
                        <img src = {redirectIcon} 
                        alt="redirect icon" 
                        loading = 'lazy' />
                    </div>
                </div>
            </div>

            <div className = 'city'>
                <div className = 'inner-container'>
                    <div className = 'inner-text'>
                        <h6>Tokyo</h6>
                        <p>from <b>$950</b></p>
                    </div>
                    <div className = 'redirect-btn'>
                        <img src = {redirectIcon} 
                        alt="redirect icon" 
                        loading = 'lazy' />
                    </div>
                </div>
            </div>

            <div className = 'city'>
                <div className = 'inner-container'>
                    <div className = 'inner-text'>
                        <h6>Rome</h6>
                        <p>from <b>$650</b></p>
                    </div>
                    <div className = 'redirect-btn'>
                        <img src = {redirectIcon} 
                        alt="redirect icon" 
                        loading = 'lazy' />
                    </div>
                </div>
            </div>

            <div className = 'city'>
                <div className = 'inner-container'>
                    <div className = 'inner-text'>
                        <h6>Cape Town</h6>
                        <p>from <b>$390</b></p>
                    </div>
                    <div className = 'redirect-btn'>
                        <img src = {redirectIcon} 
                        alt="redirect icon" 
                        loading = 'lazy' />
                    </div>
                </div>
            </div>

            <div className = 'city'>
                <div className = 'inner-container'>
                    <div className = 'inner-text'>
                        <h6>Dubai</h6>
                        <p>from <b>$680</b></p>
                    </div>
                    <div className = 'redirect-btn'>
                        <img src = {redirectIcon} 
                        alt="redirect icon" 
                        loading = 'lazy' />
                    </div>
                </div>
            </div>

            <div className = 'city'>
                <div className = 'inner-container'>
                    <div className = 'inner-text'>
                        <h6>London</h6>
                        <p>from <b>$730</b></p>
                    </div>
                    <div className = 'redirect-btn'>
                        <img src = {redirectIcon} 
                        alt="redirect icon" 
                        loading = 'lazy' />
                    </div>
                </div>
            </div>

            <div className = 'city'>
                <div className = 'inner-container'>
                    <div className = 'inner-text'>
                        <h6>New York</h6>
                        <p>from <b>$850</b></p>
                    </div>
                    <div className = 'redirect-btn'>
                        <img src = {redirectIcon} 
                        alt="redirect icon" 
                        loading = 'lazy' />
                    </div>
                </div>
            </div>
            
        </div>

       </section>
    </>
}

export default Destination