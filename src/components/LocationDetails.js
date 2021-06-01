import React, { useContext, useEffect } from 'react'

import Temperature from './Temperature'
import CloseButton from './CloseButton'
import { getWindDirection } from '../utils/wind'
import WeatherContext from './context/WeatherContext'
import { getWeather } from '../utils/api'

function LocationDetails({ location, closeLocation }) {

    const { locationsWeather, setLocationsWeather } = useContext(WeatherContext)

    useEffect(() => {
        const setData = async () => {
            const response = await getWeather(location)
            if (response.status === 200) {
                setLocationsWeather(prevState => { 
                    return {
                        ...prevState,
                        [location]: {
                            ...response.data,
                            time: new Date()
                        }
                    }
                })
            }
        }

        if (locationsWeather[location] 
            && locationsWeather[location].time
            && new Date() - locationsWeather[location].time <= 60000) {
            //есть свежая запись
            
            const timeout = setTimeout(() => {
                setData()
            }, new Date() - locationsWeather[location].time)

            clearTimeout(timeout)

            const interval = setInterval(() => {
                setData()
            }, 60000)

            return () => clearInterval(interval)
        } else {
            setData()
            const interval = setInterval(() => {
                setData()
            }, 60000)
    
            return () => clearInterval(interval)

        }
    }, [location])

    const locData = locationsWeather[location]

    return (
        <div className="fullHeight" onClick={closeLocation}>
            <CloseButton closeLocation={closeLocation}/>
            <div className="locationDetails">
                {locData && new Date() - locData.time < 120000
                    ? <>
                        <h1 className="locationName">{locData.name}</h1>
                        <div className="flexRow">
                            <img 
                                className="iconCard"
                                src={`http://openweathermap.org/img/wn/${locData.weather[0].icon}@2x.png`}
                                alt={`weather at ${locData.name}`}
                            />
                            <p className="lightText">{locData.weather[0].description}</p>
                        </div>
                        <div className="flexRow">
                            <div className="normalText">
                                <Temperature temp={Math.round(locData.main.temp)}/>
                            </div>
                            <div className="lightText">
                                / feels like <Temperature temp={Math.round(locData.main.feels_like)}/>
                            </div>
                        </div>
                        <div className="flexRow">
                            <div className="normalText">
                                {locData.main.humidity} <small>%</small>
                            </div>
                            <div className="lightText">
                                humidity
                            </div>
                        </div>
                        <div className="flexRow">
                        <span className="lightText">wind </span>
                        <span className="normalText">{locData.wind.speed} <small>m/s</small> </span>
                        <span className="lightText">{getWindDirection(locData.wind.deg)}</span>
                    </div>
                    </>
                    : <div className="lightText" style={{textAlign: "center"}}>
                        no data
                    </div>
                }    
            </div>
        </div>
    )
}
  
export default LocationDetails