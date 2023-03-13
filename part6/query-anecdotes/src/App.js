import { useQuery } from 'react-query'
import { getAnecdotes } from './requests'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
  const { isLoading, isError, data } = useQuery('anecdotes', getAnecdotes, {
    refetchOnWindowFocus: false
  })

  if (isLoading) {
    return <div>loading data...</div>
  }

  if (isError) {
    return <div>anecdote service not available due to problems in server</div>
  }

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
      <AnecdoteList anecdotes={data} />
    </div>
  )
}

export default App
