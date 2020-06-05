let a = new Promise((resolve, reject) => {
  resolve('1')
})
let dd = new Promise((resolve, reject) => {
  resolve('3')
})
let b = new Promise((resolve, reject) => {
  reject('2')
})

// console.log(aa)
// function c(promiseList) {
// let d = new Promise((resolve, reject) => {
// let promiseAll = arr => { // promise.all反向：一个成功则为成功，全部失败则为失败
//   let result = []
//   return new Promise((resolve, reject) => {
//     for (let i = 0; i < arr.length; i++) {
//       arr[i].then((data) => {
//         result[i] = data;
//         console.log(result)
//         if (result.length == 0) {
//           resolve(result)
//         } else {
//           reject(result)
//         }
//       }, reject)
//     }
//   })
// }





let promiseAll = function (promiseList) { // promise.all反向：一个成功则为成功，全部失败则为失败
  return new Promise((resolve, reject) => {
    const resultList = [];
    function ret() {
      const promiseLen = promiseList.length;
      if (resultList.length === promiseLen) {
        if (promiseList.filter(r => !!r.err).length === promiseLen) {
          reject('All promise run err.');
        }
        const re = resultList
          .sort((a, b) => a.idx - b.idx)
          .map(({ res }) => res);
        resolve(re);
      }
    }
    promiseList.forEach((promise, idx) => {
      promise
        .then((res) => {
          console.log(res)
          resultList.push({ res, idx });
          ret();
        })
        .catch((err) => {
          console.log(err, 'err')
          resultList.push({ res: null, err, idx });
          ret();
        });
    });
  })
};

promiseAll([a, dd, b]).then(res => {
  console.log(res, 'res')
}).catch(err => {
  console.log('err', err)
})