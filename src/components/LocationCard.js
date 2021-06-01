import React from 'react'

function LocationCard({ city, openLocation }) {

    return (
        <div 
            className="locationCard" 
            onClick={e => openLocation(city.code)}
        >
            <h3 className="locationCardTitle">{city.name}</h3> 
        </div> 
    )
}
  
export default LocationCard