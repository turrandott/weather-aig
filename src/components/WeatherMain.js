import React, { useState, useEffect } from 'react'
import Locations from './Locations'
import './style.css'
import { getWeather } from '../utils/api'
import LocationDetails from './LocationDetails'
import cities from '../utils/cities' 

function WeatherMain() {

    const [locationsWeather, setLocationsWeather] = useState([])

    useEffect(() => {
        const setData = async () => {
            const weatherArray = cities.map(async (city) => {
                const response = await getWeather(city.code)
                return {...response, city: city.name}
            })
            setLocationsWeather(weatherArray)
        }

        const interval = setInterval(() => {
            setData()
        }, 120000)

        setData()

        return () => clearInterval(interval)

    }, [])

    const [location, setLocation] = useState(null)

    const openLocation = loc => {
        setLocation(loc)
    }

    const closeLocation = () => {
        setLocation(null)
    }

    return (
        <main>
            <Locations 
                openLocation={openLocation} 
                locationsWeather={locationsWeather}
                location={location}        
            />
            {location && 
                <LocationDetails 
                    locData={location} 
                    closeLocation={closeLocation}
                />
            }
        </main>
    )
}
  
export default WeatherMain