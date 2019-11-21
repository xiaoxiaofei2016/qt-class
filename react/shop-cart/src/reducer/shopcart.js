const defaultList = [
  {
    name: 'Ipad',
    count: 3,
    price: 3000,
    checked: false
  },
  {
    name: 'Iphone',
    count: 4,
    price: 7000,
    checked: false
  }
]
function shopCart(state, action) {
  console.log(state) // 当前模块的state
  switch (action.type) {
    case 'TOGGLE_CHECKED':
      return state.map((good, i) => {
        if (i === action.index) {
          // return {
          //   ...good,
          //   checked: action.checked
          // }
          good.checked = action.checked
        }
        return good
      })
    case 'DEL':
      return state.filter((good, i) => {
        return i !== action.index
      })
    default:
      return defaultList
  }
}

export default shopCart