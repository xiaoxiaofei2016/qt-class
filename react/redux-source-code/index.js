// reducer -> store
const createStore = (reducer) => {
  let currentState
  currentState = reducer({}, {
    type: '@@redux/INIT'
  })
  let listeners = []
  function subscribe(cb) {
    listeners.push(cb)
  }
  function getState() {
    return currentState
  }
  // action plain object{}
  // dispatch -> action -> reducer -> store
  function dispatch(action) {
    // reducer
    currentState = reducer(currentState, action)
    // 发布
    for (const cb of listeners) {
      cb()
    }
  }
  return {
    getState,
    dispatch,
    subscribe
  }
}
function combineReducer(reducers) {
  const finalReducerKeys = Object.keys(reducers)
  let nextState = {}
  // 
  // 生成一个reducer
  return (state = {}, action) => {
    console.log('state->>>', state)
    for (let i = 0; i < finalReducerKeys.length; i++) {
      let key = finalReducerKeys[i]
      let reducer = reducers[key]
      const previousState = state[key]
      nextState[key] = reducer(previousState, action)
    }
    return nextState
  }
}


export {
  createStore,
  combineReducer
}
