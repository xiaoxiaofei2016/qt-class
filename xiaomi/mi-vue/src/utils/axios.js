import axios from 'axios'
export function http (url, data, cb) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `http://localhost:3000/users/${url}`,
      data: data
    }).then((res) => {
      resolve(res)
      cb()
    }).catch(err => {
      reject(err)
    })
  })
}