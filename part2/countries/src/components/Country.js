const Country = ({ country, getWeather }) => {
  const weatherData = getWeather(country.capital);

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
       {/* <h1>{countriesToShow[0].flag}</h1> */}
      <h2>Weather in {country.capital}</h2>
    </div>
  );
}

export default Country;