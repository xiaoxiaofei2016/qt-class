class Promise {
  constructor (fn) {
    this.status = 'pending'
    this.value = undefined
    this.reason = undefined

    let resolve = value => {
      if (this.status === 'pending') { // 启用状态
        this.value = value
        this.status = 'fullfilled' // 修改状态完成状态
      }
    }

    let reject = value => {
      if (this.status === 'pending') {
        this.reason = reason
        this.status = 'rejected' // 修改状态失败状态
      }
    }

    try {
      fn(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    switch (this.status) {
      case 'fullfilled':
        onFulfilled()
        break;
      case 'rejected':
        onRejected()
        break;
      default:
        break;
    }
  }
}