export const defaultState = {
  loading: true,
  movies: []
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        movies: action.movies
      }
    default :
      return state
  }
}