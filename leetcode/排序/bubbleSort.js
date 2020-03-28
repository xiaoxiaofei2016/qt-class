function bubbleSort(data) {
  var temp = 0;
  for (let i = data.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (data[j] > data[j + 1]) {
        temp = data[j]
        data[j] = data[j + 1]
        data[j + 1] = temp
      }
    }
  }
  return data
}

bubbleSort([1, 3, 6, 4])