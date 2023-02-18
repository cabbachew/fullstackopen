import { useState, useEffect } from 'react';
import countryService from './services/countries';

const App = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <span> find countries </span>
      <input value={filter} onChange={handleFilterChange} />
    </div>
  );
}

export default App;