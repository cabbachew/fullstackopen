const Countries = ({ countries }) => {
  return (
    <div>
      {countries.length > 10 ? (
        <div>Too many matches, specify another filter</div>
      ) : (
        countries
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

export default Countries;