const Filter = ({ filter, handleFilterChange }) => {
  return (
    <>
      <span> find countries </span>
      <input value={filter} onChange={handleFilterChange} />
    </>
  )
};

export default Filter;