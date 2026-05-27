



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

const CARD_WIDTH = 216

const Destination = function () {

    const [offset, setOffset]       = useState(0)
    const [maxOffset, setMaxOffset] = useState(0)
    const wrapperRef                = useRef(null)

    useEffect(() => {
    if (wrapperRef.current) {
        const citiesStrip  = wrapperRef.current.querySelector('.cities')
        const visibleWidth = wrapperRef.current.offsetWidth
        const totalWidth   = citiesStrip.scrollWidth
        setMaxOffset(Math.max(0, totalWidth - visibleWidth))
    }
}, [])

    const scrollLeft  = () => setOffset(prev => Math.max(0, prev - CARD_WIDTH))
    const scrollRight = () => setOffset(prev => Math.min(maxOffset, prev + CARD_WIDTH))

    const showLeft  = offset > 0
    const showRight = offset < maxOffset

    return <>
        <section className='destination-section'>

            <div className='texts'>
                <h6>Popular Destinations</h6>
                <a href="">View all</a>
            </div>

            <div className='cities-wrapper' ref={wrapperRef}>

                {showLeft && (
                    <button className='carousel-btn left' 
                    onClick={scrollLeft}>‹</button>
                )}

                <div className='cities' 
                style={{ transform: `translateX(-${offset}px)` }}>
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

                {showRight && (
                    <button className='carousel-btn right' 
                    onClick={scrollRight}>›</button>
                )}

            </div>

        </section>
    </>
}

export default Destination