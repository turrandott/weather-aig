import React from 'react'

const WeatherContext = React.createContext({
    locationsWeather: {},
    setLocationsWeather: () => {},
})

export default WeatherContext