const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
  return (
    // <div className="error">
    <div className="message">
      {message}
    </div>
  )
}

export default Notification