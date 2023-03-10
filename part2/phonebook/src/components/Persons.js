import Person from './Person'

const Persons = ({ personsToShow, handleDelete }) => {  
  return (
    <div>
      {personsToShow.map(person =>
        <Person key={person.name} person={person} handleDelete={handleDelete} />
      )}
    </div>
  )
}

export default Persons