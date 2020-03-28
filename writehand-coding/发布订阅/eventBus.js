class EventEmitter {
  constructor () {
    this.events = this.events || new Map();
  }

  
  addListener (type, fn) {
    if (!this.events.get(type)) { // Map的set、get方法 监听事件
      this.events.set(type, fn)
    }
  }

  emit (type) { // 触发事件
    let handle = this.events.get(type)
    handle.apply(this, [...arguments].slice(1)) // 去掉第一个参数
  }
}

let emitter = new EventEmitter()
emitter.addListener('ages', age => {
  console.log(age)
})

emitter.emit('ages', 18)