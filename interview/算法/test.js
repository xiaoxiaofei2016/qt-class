let arr = []
for (let i = 100; i < 1000; i++) {
  
  if (i % 8 == 1 && i % 9 != 1) {
    arr.push(i)
  } else if (i % 9 == 1 && i % 8 != 1) {
    arr.push(i)
  }
}

console.log(arr)
let as = arr.reduce(function(a, b) {
  return a + b
})

console.log(as)