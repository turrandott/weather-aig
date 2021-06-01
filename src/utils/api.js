import axios from 'axios'

import apiKey from './apiKey'

const api = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/`
})

const getWeather = (location, retries = 3) => {
    return api.get(`weather?APPID=${apiKey}&q=${location}&units=metric`)
        .then(data => {
            console.log("ai call", data)
            return data
        })
        .catch(error => {
            if (retries > 0) {
                return getWeather(location, retries - 1)
            } else {
                return error.response
            }
        })
}

export { getWeather }