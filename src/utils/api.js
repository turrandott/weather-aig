import axios from 'axios'

const apiKey = 'e46b0ec78347abd7505637e03b8ab9bd'

const api = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/`
})

const getWeather = (location) => {
    return api.get(`weather?APPID=${apiKey}&q=${location}&units=metric`)
        .then(data => {
            return data.data
        })
        .catch(error => {
            return {}
        })
}

export { getWeather }