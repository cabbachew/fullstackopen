const Weather = ({ weatherData }) => {
  // Convert temperature from Kelvin to Celsius to 2 decimal places
  const tempCelcius = Math.round((weatherData.main.temp - 273.15) * 100) / 100;

  return (
    <div>
      <h2>Weather in {weatherData.name}</h2>
      <div>temperature {tempCelcius} Celsius</div>
      <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="weather icon" />
      <div>wind {weatherData.wind.speed} m/s</div>
    </div>
  );
}

export default Weather;