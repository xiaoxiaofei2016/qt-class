const defaultState = {
  inputValue: 'aas',
  list: []
}

export default (state, action) => {
  switch(action.type) {
    case 'change_input':
      return {
          ...state,
          inputValue: action.value
        }

    case 'add_item':
      return Object.assign({}, state, {
        list: state.list.concat([state.inputValue]),
        inputValue: ''
      })
    
    case 'delete_item':
      return Object.assign({}, state, {
        list: state.list.splice(action.value, 1),
        ...state
      })

    default: 
      return defaultState
  }

}