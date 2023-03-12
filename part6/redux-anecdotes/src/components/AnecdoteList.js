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
  // const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  // Given a and b, negative preserves order, positive reverses order
  const sortedAnecdotes = useSelector(state => state.sort((a, b) => b.votes - a.votes))

  const vote = (id) => {
    console.log('vote', id)
    // useDispatch allows access to Redux store's dispatch method
    dispatch(voteAnecdote(id))
  }

  return (
    <>
      <h2>Anecdotes</h2>
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