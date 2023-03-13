import { useMutation, useQueryClient } from 'react-query'
import { updateAnecdote } from '../requests'

const AnecdoteList = ({ anecdotes }) => {
  const queryClient = useQueryClient()

  const updateAnecdoteMutation = useMutation(updateAnecdote, {
    onSuccess: (updatedAnecdote) => {
      const anecdotes = queryClient.getQueryData('anecdotes')
      queryClient.setQueryData('anecdotes', anecdotes.map(anecdote => anecdote.id === updatedAnecdote.id ? updatedAnecdote : anecdote))
    }
  })

  const handleVote = (anecdote) => {
    console.log('vote')
    const updatedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    updateAnecdoteMutation.mutate(updatedAnecdote)
  }

  return (
    <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList