let url = require('url')

let request = {
  get url() { // 调用时直接写url
    return this.req.url
  },
  get path() {
    return url.parse(this.req.url).pathname
  }
}

module.exports = request