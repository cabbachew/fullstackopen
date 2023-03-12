import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    if (state.filter === '') {
      return state.anecdotes
    }
    return state.anecdotes.filter(anecdote =>
      anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
    )
  })

  const dispatch = useDispatch()

  // Given a and b, negative preserves order, positive reverses order
  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes)

  const vote = (id) => {
    console.log('vote', id)
    // useDispatch allows access to Redux store's dispatch method
    dispatch(voteAnecdote(id))
  }

  return (
    <>
      {sortedAnecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => vote(anecdote.id)}
        />
      )}
    </>
  )
}

export default AnecdoteList  