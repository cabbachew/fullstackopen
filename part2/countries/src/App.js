import { useState, useEffect } from 'react';
import countryService from './services/countries';
import Filter from './components/Filter';

const App = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
    </div>
  );
}

export default App;