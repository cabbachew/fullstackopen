import axios from 'axios'

export const getAnecdotes = async () => {
  const response = await axios.get('http://localhost:3001/anecdotes')
  return response.data
}

export const createAnecdote = async (content) => {
  const response = await axios.post('http://localhost:3001/anecdotes', { content, votes: 0 })
  return response.data
}