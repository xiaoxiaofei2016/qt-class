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
      const newList = [...state.list]
      newList.splice(action.value, 1)
      return Object.assign({}, state, {
        ...state,
        list: newList
      })

    default: 
      return defaultState
  }

}