import React from 'react'

import Temperature from './Temperature'
import CloseButton from './CloseButton'
import { getWindDirection } from '../utils/wind'

function LocationDetails({ locData, closeLocation }) {

    return (
        <div className="fullHeight" onClick={closeLocation}>
            <CloseButton closeLocation={closeLocation}/>
            <div className="locationDetails">
                {locData.name
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