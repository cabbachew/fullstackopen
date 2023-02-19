import { useState, useEffect } from 'react';
import weather from '../services/weather';
import weatherService from '../services/weather';
import Weather from './Weather';

const Country = ({ country }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    weatherService.getWeather(country.capital).then((data) => {
      setWeatherData(data);
      console.log(`Weather data loaded for ${country.capital}`);
    });
  }, [weatherData]);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital}</div>
      <div>area {country.area} km<sup>2</sup></div>
      <h3>languages</h3>
      <ul>
        {/* Obtain an array of languages to map over */}
        {Object.values(country.languages)
          .map((language) => <li key={language}>{language}</li>
        )}
      </ul>
      <img src={country.flags.png} alt="flag" width="150" />
      {/* Only render the weather component if weather data is available */}
      {weatherData && (
        <Weather weatherData={weatherData} />
      )}
    </div>
  );
}

export default Country;