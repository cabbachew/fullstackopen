import axios from 'axios';
const baseUrl = 'api.openweathermap.org/data/2.5'
const apiKey = process.env.REACT_APP_WEATHER_API_KEY

const getWeather = (city) => {
  const request = axios.get(`${baseUrl}/weather?q=${city}&appid=${apiKey}`)
  return request.then(response => response.data)
}

export default { getWeather }