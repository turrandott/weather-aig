import React, { useEffect, useState } from 'react'
import Temperature from './Temperature'

function LocationCard({ locationData, openLocation }) {

    const [locData, setLocData] = useState({})

    useEffect(() => {
        const setData = async locationData => {
            const syncData = await locationData
            setLocData(syncData)
        }

        setData(locationData)

    }, [locationData])

    return (
        <div 
            className="locationCard" 
            onClick={e => openLocation(locData)}
            key={locData.city}
        >
            <h3 className="locationCardTitle">{locData.name}</h3> 
            {locData.main
                ? <div className="shortInfoCard">

                    <div className="shortTemp">
                        <Temperature temp={Math.round(locData.main.temp)}/>
                    </div>
                    <img 
                        src={`http://openweathermap.org/img/wn/${locData.weather[0].icon}@2x.png`}
                        alt={`weather at ${locData.name}`}
                    />
                </div>
                : <div>no data</div>
            }
        </div> 
    )
}
  
export default LocationCard