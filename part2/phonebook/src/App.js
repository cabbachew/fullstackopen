import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  // const [errorMessage, setErrorMessage] = useState(null)
  const [message, setMessage] = useState(null)
    
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, []) // [] means this effect is run once when the component is first rendered

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    // Check for duplicate names and alert if found
    // Note: some() returns true if any of the elements in the array pass the test
    if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase())) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(p => p.name.toLowerCase() === newName.toLowerCase())
        const changedPerson = { ...person, number: newNumber }
        personService
          .update(person.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
            setNewName('')
            setNewNumber('')
            setMessage(
              {
                body: `Updated ${returnedPerson.name}`,
                type: 'success'
              }
            )
            setTimeout(() => {
              setMessage(null)
            }
            , 5000) // 5 seconds
          })
          .catch(error => {
            setMessage(
              {
                body: error.response.data.error,
                type: 'error'
              }
            )
            setTimeout(() => {
              setMessage(null)
            }
            , 5000) // 5 seconds
          })
      }
      return
    }
    // Save new person and reset input fields
    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setMessage(
          {
            body: `Added ${returnedPerson.name}`,
            type: 'success'
          }
        )
        setTimeout(() => {
          setMessage(null)
        } , 5000) // 5 seconds
      })
      .catch(error => {
        // error >> {response: {…}} >> {data: {…}} >> error message
        setMessage(
          {
            body: error.response.data.error,
            type: 'error'
          }
        )
        setTimeout(() => {
          setMessage(null)
        } , 5000) // 5 seconds
      })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const personsToShow = filter
  ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  : persons

  const handleDelete = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
          setMessage(
            {
              body: `Deleted ${person.name}`,
              type: 'success'
            }
          )
          setTimeout(() => {
            setMessage(null)
          }
          , 5000) // 5 seconds
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {/* <Notification message={errorMessage} /> */}
      <Notification message={message} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>

      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h3>Numbers</h3>

      <Persons personsToShow={personsToShow} handleDelete={handleDelete} />
    </div>
  )
}

export default App