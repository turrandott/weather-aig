import React from 'react'

import LocationCard from './LocationCard'


function Locations({ cities, openLocation, invisible }) {

    return (
        <div className="locations" style={invisible ? {display: "none"} : {}}>
            {cities.map(city => 
                <LocationCard
                    key={city.code}
                    city={city}
                    openLocation={openLocation}
                />
            )}
        </div>
    )
}
  
export default Locations