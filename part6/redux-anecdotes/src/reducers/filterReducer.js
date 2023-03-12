const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'FILTER':
      return action.payload
    default:
      return state
  }
}

export const filterAnecdotes = (filter) => {
  return {
    type: 'FILTER',
    payload: filter
  }
}

export default filterReducer