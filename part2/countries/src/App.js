import { useState, useEffect } from 'react';
import countryService from './services/countries';
import Filter from './components/Filter';

const App = () => {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countryService.getAll().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []);

  const countriesToShow = filter
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(filter.toLowerCase())
      )
    : countries;

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Log the number of countries to show
  console.log('number of countries to show', countriesToShow.length);

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      {countriesToShow.map((country) => (
        // cca3 is a unique identifier for each country
        <div key={country.cca3}>{country.name.common}</div>
      ))} 
    </div>
  );
}

export default App;