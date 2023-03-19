// import { useState } from 'react'
import { useField } from '../hooks'

const AnecdoteForm = ({ addNew }) => {
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')
  // const [content, setContent] = useState('')
  // const [author, setAuthor] = useState('')
  // const [info, setInfo] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    })
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input name='content' {...content} />
          {/* <input name='content' value={content.value} onChange={content.onChange} /> */}
          {/* <input name='content' value={content} onChange={(e) => setContent(e.target.value)} /> */}
        </div>
        <div>
          author
          <input name='author' {...author} />
          {/* <input name='author' value={author.value} onChange={author.onChange} /> */}
          {/* <input name='author' value={author} onChange={(e) => setAuthor(e.target.value)} /> */}
        </div>
        <div>
          url for more info
          <input name='info' {...info} />
          {/* <input name='info' value={info.value} onChange={info.onChange} /> */}
          {/* <input name='info' value={info} onChange={(e)=> setInfo(e.target.value)} /> */}
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm