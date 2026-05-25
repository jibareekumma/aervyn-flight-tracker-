
import rotateIcon from "/icons/spin-rotate.png"
import "../css/Header.css"
import selectArrow from "/icons/select arrow.png"



const NavigatedSection = function(){

    return <>

        <div id = 'navigated-section'> 

            <p>Where are you going today?</p>


            <div className = 'navigated-container'>


               <div className='country-options'>

  {/* Origin Country */}
  <div style={{ position: "relative", 
    display: "inline-block" }}>
    <select
      name="located-country"
      id="located-country"
      style={{ appearance: "none", WebkitAppearance: "none", paddingRight: "40px" }}
    >
      <option value="USA">United States</option>
      <option value="NIGERIA">Nigeria</option>
    </select>
    <img
      src={selectArrow}
      alt="down arrow"
      loading="lazy"
      className = 'select-icon'
      style={{
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        pointerEvents: "none",
       
      }}
    />
  </div>

  {/* Swap Icon */}
  <div className = 'arrow-container'>
    <img
      src={rotateIcon}
      alt="Rotate Icon"
      loading="lazy"
      title="Switch Destinations"
    />
  </div>

  {/* Destination Country */}
  <div style={{ position: "relative", display: "inline-block" }}>
    <select
      name="destination-country"
      id="destination-country"
      style={{ appearance: "none", WebkitAppearance: "none", paddingRight: "40px" }}
    >
      <option value="NIGERIA">Nigeria</option>
      <option value="USA">United States</option>
    </select>
    
    <img
      src={selectArrow}
      alt="down arrow"
      loading="lazy"
      className = 'select-arrow select-icon'
      style={{
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        pointerEvents: "none"
      }}
    />
  </div>
</div>


    <div className='date-options item-option'>
  
  {/* Depart Date */}
  <div className='depart-date select-item item1'>
    <p>Depart</p>
    <input type="date" />
  </div>

  {/* Return Date */}
  <div className='return-date select-item item2'>
    <p>Return</p>
    <input type="date" />
  </div>

</div>

<div className='trip-options item-option'>

  {/* Trip Type */}
  <div className='trip-type type-item item1'>
    <p>Trip Type</p>
    <div 
    className = 'input-item'
    style={{ position: "relative", 
    display: "inline-block" }}>
      <select
        name="trip-type"
        className="select-item"
        id="trip-type"
        style={{ appearance: "none", WebkitAppearance: "none"}}
      >
        <option value="One-Way">One-Way</option>
        <option value="Round-Trip">Round-Trip</option>
        <option value="Multi-City">Multi-City</option>
        <option value="Open-Jaw">Open-Jaw</option>
      </select>
      <img
        src={selectArrow}
        alt="down arrow"
        loading="lazy"
        className = 'select-icon'
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none"
        }}
      />
    </div>
  </div>

  {/* Trip Class */}
  <div className='trip-class type-item item2'>
    <p>Class</p>
    <div style={{ position: "relative", display: "flex",
    
     }} className = 'input-item'>
      <select
        name="trip-class"
        className="select-item"
        id="trip-class"
        style={{ appearance: "none", WebkitAppearance: "none" }}
      >
        <option value="Economy">Economy</option>
        <option value="Premium">Premium</option>
        <option value="Business">Business</option>
        <option value="First Class">First Class</option>
      </select>
      <img
        src={selectArrow}
        alt="down arrow"
        loading="lazy"
        className = 'select-icon'
        style={{
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        pointerEvents: "none",
        width: "20px",   
        height: "20px"
  }}
    
      />
    </div>
  </div>

</div>

            <button
            className = 'search-btn'
            >Search Flights</button>
            </div>

            </div>

    </>
}



export default NavigatedSection