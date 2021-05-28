import React from 'react'

import LocationCard from './LocationCard'


function Locations({ locationsWeather, openLocation, location }) {

    return (
        <div className="locations" style={location ? {display: "none"} : {}}>
            {locationsWeather.map((locationData, index) => 
                <LocationCard
                    key={locationData.city ? locationData.city : index}
                    locationData={locationData}
                    openLocation={openLocation}
                />
            )}
        </div>
    )
}
  
export default Locations