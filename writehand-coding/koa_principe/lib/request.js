let url = require('url')

let request = {
  get url() { // 用get调用时直接写url,而不需要写url()
    return this.req.url
  },
  get path() {
    return url.parse(this.req.url).pathname
  },
  get query() {
    return url.parse(this.req.url).query
  }
}

module.exports = request