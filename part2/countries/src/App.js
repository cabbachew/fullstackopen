import { useState, useEffect } from 'react';
import countryService from './services/countries';
import Filter from './components/Filter';
import Countries from './components/Countries';

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
      <Countries countries={countriesToShow} />
    </div>
  );
}

export default App;