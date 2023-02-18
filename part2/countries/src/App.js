import { useState, useEffect } from 'react';
import countryService from './services/countries';
import weatherService from './services/weather';
import Filter from './components/Filter';
import Country from './components/Country';
import Countries from './components/Countries';

const App = () => {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countryService.getAll().then((initialCountries) => {
      setCountries(initialCountries);
      console.log(`${initialCountries.length} countries loaded from API`);
    });
  }, []);

  const countriesToShow = filter
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(filter.toLowerCase())
      )
    : [];
  
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const getWeather = (city) => {
    weatherService.getWeather(city).then((weather) => {
      console.log(weather);
    });
  };

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      {countriesToShow.length === 1 ? (
        <Country country={countriesToShow[0]} getWeather={getWeather} />
      ) : (
        <Countries countries={countriesToShow} setFilter={setFilter} />
      )}
    </div>
  );
}

export default App;