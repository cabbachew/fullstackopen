import axios from 'axios'
// const baseUrl = 'http://localhost:3001/persons' // When using json-server
// const baseUrl = 'http://localhost:3001/api/persons' // When using phonebook-backend
  // Unnecessary with proxy in package.json
const baseUrl = '/api/persons' // When serving the frontend from the backend

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

// Can't use the word "delete" as a variable name because it's a reserved word
const remove = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

export default { getAll, create, update, remove }