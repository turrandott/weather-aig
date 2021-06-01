import React, { useState } from 'react'
import Locations from './Locations'
import './style.css'
import LocationDetails from './LocationDetails'
import cities from '../utils/cities' 
import WeatherState from './context/WeatherState'

function WeatherMain() {

    const [location, setLocation] = useState(null)

    const openLocation = loc => {
        setLocation(loc)
    }

    const closeLocation = () => {
        setLocation(null)
    }

    return (
        <WeatherState>
            <main>
                <Locations
                    cities={cities} 
                    openLocation={openLocation} 
                    invisible={!!location}
                />
                {location && 
                    <LocationDetails
                        location={location}
                        closeLocation={closeLocation}
                    />
                }
            </main>
        </WeatherState>
    )
}
  
export default WeatherMain