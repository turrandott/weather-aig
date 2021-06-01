import React, { useState } from 'react'

import WeatherContext from './WeatherContext'

export default function WeatherState (props) {

    const [locationsWeather, setLocationsWeather] = useState({})

    return (
        <WeatherContext.Provider
            value={{
                locationsWeather,
                setLocationsWeather,
            }}
        >
            {props.children}
        </WeatherContext.Provider>
    )
}