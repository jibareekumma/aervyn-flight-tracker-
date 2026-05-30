



import { useState, useRef, useEffect } from "react"
import "../css/Destination.css"

const redirectIcon = "/icons/redirect_icon.png"

const cities = [
    { name: "Bangkok",   price: "$780",  className: "city-bangkok"  },
    { name: "Toronto",   price: "$900",  className: "city-toronto"  },
    { name: "Paris",     price: "$580",  className: "city-paris"    },
    { name: "Istanbul",  price: "$540",  className: "city-istanbul" },
    { name: "Tokyo",     price: "$950",  className: "city-tokyo"    },
    { name: "Rome",      price: "$650",  className: "city-rome"     },
    { name: "Cape Town", price: "$390",  className: "city-capetown" },
    { name: "Dubai",     price: "$680",  className: "city-dubai"    },
    { name: "London",    price: "$730",  className: "city-london"   },
    { name: "New York",  price: "$850",  className: "city-newyork"  },
]


const hotels = [
    { name: "BangkokHotel",   price: "$450",  className: "city-bangkok hotel-bangkok"  },
    { name: "TorontoHotel",   price: "$305",  className: "city-toronto hotel-toronto"  },
    { name: "ParisHotel",     price: "$211",  className: "city-paris hotel-paris"    },
    { name: "IstanbulHotel",  price: "$235",  className: "city-istanbul hotel-istanbul" },
    { name: "TokyoHotel",     price: "$168",  className: "city-tokyo hotel-tokyo"    },
    { name: "RomeHotel",      price: "$495",  className: "city-rome hotel-rome"     },
    { name: "Cape TownHotel", price: "$446",  className: "city-capetown hotel-capetown" },
    { name: "DubaiHotel",     price: "$243",  className: "city-dubai hotel-dubai"    },
    { name: "LondonHotel",    price: "$437",  className: "city-london hotel-london"   },
    { name: "New YorkHotel",  price: "$283",  className: "city-newyork hotel-newyork"  },
]


const cars = [
    { name: "BMW 3",           price: "$120/day", className: "city car-bmw"           },
    { name: "Honda Civic",     price: "$80/day",  className: "city car-honda_civic"   },
    { name: "Honda CR-V",      price: "$95/day",  className: "city car-honda_crv"     },
    { name: "Honda Odyssey",   price: "$110/day", className: "city car-honda_oddyssy" },
    { name: "Hyundai Accent",  price: "$70/day",  className: "city car-hyundai_accent"},
    { name: "Toyota Camry",    price: "$90/day",  className: "city car-toyota_camry"  },
    { name: "Toyota Corolla",  price: "$75/day",  className: "city car-toyota_corolla"},
    { name: "Toyota RAV4",     price: "$105/day", className: "city car-toyota_rav4"   },
    { name: "Toyota Yaris",    price: "$65/day",  className: "city car-toyota_yaris"  },
    { name: "Volkswagen",      price: "$100/day", className: "city car-volkswagon"    },
]




const CARD_WIDTH = 216

const Destination = function ({activeTabs}) {

    const [citiesOffset, setCitiesOffset]       = useState(0)
    const [citiesMaxOffset, setCitiesMaxOffset] = useState(0)
    const citiesWrapperRef                      = useRef(null)

    const [hotelsOffset, setHotelsOffset]       = useState(0)
    const [hotelsMaxOffset, setHotelsMaxOffset] = useState(0)
    const hotelsWrapperRef                      = useRef(null)

    const [carsOffset, setCarsOffset]       = useState(0)
    const [carsMaxOffset, setCarsMaxOffset] = useState(0)
    const carsWrapperRef                    = useRef(null)


    useEffect(() => {
    if (citiesWrapperRef.current) {
        const strip        = citiesWrapperRef.current.querySelector('.cities')
        const visibleWidth = citiesWrapperRef.current.offsetWidth
        setCitiesMaxOffset(Math.max(0, strip.scrollWidth - visibleWidth))
    }
    if (hotelsWrapperRef.current) {
        const strip        = hotelsWrapperRef.current.querySelector('.cities')
        const visibleWidth = hotelsWrapperRef.current.offsetWidth
        setHotelsMaxOffset(Math.max(0, strip.scrollWidth - visibleWidth))
    }

    if (carsWrapperRef.current) {
    const strip        = carsWrapperRef.current.querySelector('.cities')
    const visibleWidth = carsWrapperRef.current.offsetWidth
    setCarsMaxOffset(Math.max(0, strip.scrollWidth - visibleWidth))
}
}, [activeTabs])



    const scrollCitiesLeft  = () => setCitiesOffset(prev => Math.max(0, prev - CARD_WIDTH))
    const scrollCitiesRight = () => setCitiesOffset(prev => Math.min(citiesMaxOffset, prev + CARD_WIDTH))

        const scrollHotelsLeft  = () => setHotelsOffset(prev => Math.max(0, prev - CARD_WIDTH))
        const scrollHotelsRight = () => setHotelsOffset(prev => Math.min(hotelsMaxOffset, prev + CARD_WIDTH))


    const scrollCarsLeft  = () => setCarsOffset(prev => Math.max(0, prev - CARD_WIDTH))
    const scrollCarsRight = () => setCarsOffset(prev => Math.min(carsMaxOffset, prev + CARD_WIDTH))
   
    return <>

        {activeTabs === "flights" && (
        <section className='destination-section'>

            <div className='texts'>
                <h6>Popular Destinations</h6>
                <a href="">View all</a>
            </div>

            <div className='cities-wrapper' ref={citiesWrapperRef}>
            {citiesOffset > 0 && <button className='carousel-btn left' onClick={scrollCitiesLeft}>‹</button>}
            <div className='cities' style={{ transform: `translateX(-${citiesOffset}px)` }}>
                    {cities.map((city) => (
                        <div className={`city ${city.className}`} 
                        key={city.name}>
                            <div className='inner-container'>
                                <div className='inner-text'>
                                    <h6>{city.name}</h6>
                                    <p>from <b>{city.price}</b></p>
                                </div>
                                <div className='redirect-btn'>
                                    <img src={redirectIcon} 
                                    alt="redirect icon" loading='lazy' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {citiesOffset < citiesMaxOffset && <button 
                className='carousel-btn right' 
                onClick={scrollCitiesRight}>›</button>}

            </div>

        </section>
        )}




        {activeTabs === "hotels" && (
        <section className='destination-section'>

            <div className='texts'>
                <h6>Popular Hotels</h6>
                <a href="">View all</a>
            </div>

            <div className='cities-wrapper' ref={hotelsWrapperRef}>
            {hotelsOffset > 0 && <button 
            className='carousel-btn left' 
    onClick={scrollHotelsLeft}>‹</button>}
    <div className='cities' style={{ transform: `translateX(-${hotelsOffset}px)` }}>
                    {hotels.map((hotel) => (
                        <div className={`city ${hotel.className}`} key={hotel.name}>
    <div className='inner-container'>
        <div className='inner-text'>
            <h6>{hotel.name}</h6>
            <p>from <b>{hotel.price}</b></p>
        </div>
        <div className='redirect-btn'>
            <img src={redirectIcon} alt="redirect icon" loading='lazy' />
        </div>
    </div>
</div>
                    ))}
                </div>

                {hotelsOffset < hotelsMaxOffset && <button 
                className='carousel-btn right' 
                onClick={scrollHotelsRight}>›</button>}

            </div>

        </section>
        )}


        {activeTabs === "cars" && (
        <section className='destination-section'>

    <div className='texts'>
        <h6>Popular Cars</h6>
        <a href="">View all</a>
    </div>

    <div className='cities-wrapper' ref={carsWrapperRef}>
        {carsOffset > 0 && <button className='carousel-btn left' onClick={scrollCarsLeft}>‹</button>}
        <div className='cities' style={{ transform: `translateX(-${carsOffset}px)` }}>
            {cars.map((car) => (
                <div className={`city ${car.className}`} key={car.name}>
                    <div className='inner-container'>
                        <div className='inner-text'>
                            <h6>{car.name}</h6>
                            <p>from <b>{car.price}</b></p>
                        </div>
                        <div className='redirect-btn'>
                            <img src={redirectIcon} alt="redirect icon" loading='lazy' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        {carsOffset < carsMaxOffset && <button className='carousel-btn right' onClick={scrollCarsRight}>›</button>}
    </div>

</section>
)}
    </>
}

export default Destination