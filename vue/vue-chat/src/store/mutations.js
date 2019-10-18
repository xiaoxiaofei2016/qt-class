export default {
  receiveAll (state, messages) {
    // messages.forEach()
    console.log(messages)
    if (!state.threads[messages.threadID]) {
      createThread(state, messages.threadID, messages.threadName)
    }
  }
}

function createThread(state, id, name) {
  Vue.set(state.threads, id, { // Vue.set(object, key, value)
    id,
    name,
    messages: [],
    lastMessage: null // 最新的一条
  })
}