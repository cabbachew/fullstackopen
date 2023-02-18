import { useState, useEffect } from 'react';
import countryService from './services/countries';
import Filter from './components/Filter';

const App = () => {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countryService.getAll().then((initialCountries) => {
      setCountries(initialCountries);
      console.log('number of countries retrieved:', initialCountries.length);
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

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      {countriesToShow.length > 10 ? (
        <div>Too many matches, specify another filter</div>
      ) : (
        countriesToShow
          // sort countries by name
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
          .map((country) => (
            // cca3 is a unique identifier for each country
            <div key={country.cca3}>{country.name.common}</div>
          ))
      )}
    </div>
  );
}

export default App;