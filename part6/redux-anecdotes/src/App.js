import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Filter from './components/Filter'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      {notification
        ? <Notification notification={notification} />
        : <Filter />
      }
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App