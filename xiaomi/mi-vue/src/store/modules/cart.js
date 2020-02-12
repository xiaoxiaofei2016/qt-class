import axios from 'axios'
import http from '../../utils/axios.js'
const state = {
  cart: []
}

const actions = {
  getcart ({commit}, status) { // 获取购物车表的数据
    axios({
      url: 'http://localhost:3000/users/allcarts',
      method: 'post',
      data: {}
    }).then(res => {
      console.log(res.data.data, '************')
      commit('setcart', res.data.data)
    }).catch(err => {
      console.log(err)
    })
    // http('allcarts', {}, commit('setcart', res.data.data))
  },
  addcart ({dispatch}, {id, title, price, recommend, img, num, checked}) {
    axios({
      url: 'http://localhost:3000/users/insertcart',
      method: 'post',
      data: {
        id: id,
        title: title,
        price: price,
        recommend: recommend,
        img: img,
        num: num,
        checked: checked
      }
    }).then(res => {
      if (res.data.code === '800000') {
        dispatch('getcart'); // 再次请求购物车数据
      } else {
        console.log('增加购物车失败')
      }
    }).catch(err => {
      console.log(err)
    })
  },
  deletecart ({dispatch}, id) { // 删除购物车某件商品
    axios({
      url: 'http://localhost:3000/users/deletegood',
      method: 'post',
      data: {
        id: id
      }
    }).then (res => {
      dispatch('getcart')
    })
  },
  addcartnum ({dispatch}, params) { // 增加数量
    axios({
      url: 'http://localhost:3000/users/addcartnum',
      method: 'post',
      data: {
        id: params
      }
    }).then(res => {
      dispatch('getcart') // 调用actions的另一个方法
    }).catch(err => {
      console.log(err)
    })
    // http(addcartnum, { id: params }, dispatch('getcart'))
  },
  reducecartnum ({dispatch}, params) { // 减少数量
    axios({
      url: 'http://localhost:3000/users/reducecartnum',
      method: 'post',
      data: {
        id: params
      }
    }).then(res => {
      dispatch('getcart')
    }).catch(err => {
      console.log(err)
    })
    // http(reducecartnum, { id: params }, dispatch('getcart'))
  },
  allfalse ({dispatch}, status) {
    axios({
      url: 'http://localhost:3000/users/allfalse',
      method: 'post',
      data: {
      }
    }).then(res => {
      console.log(res)
      dispatch('getcart');
    }).catch(err => {
      console.log(err)
    })
  },
  alltrue ({dispatch}, status) {
    axios({
      url: 'http://localhost:3000/users/alltrue',
      method: 'post',
      data: {
      }
    }).then(res => {
      console.log(res)
      dispatch('getcart');
    }).catch(err => {
      console.log(err)
    })
  },
  singleselect ({dispatch}, id) {
    axios({
      url: 'http://localhost:3000/users/singleselect',
      method: 'post',
      data: {
        id: id
      }
    }).then(res => {
      dispatch('getcart');
    }).catch(err => {
      console.log(err)
    })
  }
}

const mutations = {
  setcart (state, cart) {
    state.cart = cart
  }
}

const getters = {
  cart: state => state.cart,
  littletotalPrice (state) { // 小计
    let money = []
    if (state.cart.length != 0) {
      state.cart.forEach((item) => {
        console.log(item)
         let price = item.price.substring(0, item.price.indexOf('元'))
         money.push(price * item.num)
      })
      return money
    } else {
      return []
    }
  },
  totalPrice (state) { // 总计
    let selected = state.cart.filter(function(elem) {
      return elem.checked == 1
    })
    let totalprice = 0
    for (let i = 0; i < selected.length; i++) {
      let price1 = selected[i].price.substring(0, selected[i].price.indexOf('元'))
      let price2 = price1 * selected[i].num
      totalprice += price2
    }
    return totalprice
  },
  selectednum (state) { // 选中的数量
    let selected = state.cart.filter(function(elem) {
      return elem.checked == 1
    })
    return selected.length
  },
  totalnum (state) { // 商品数
    let sum = 0
    for (let i = 0; i < state.cart.length; i++) {
      sum = sum + state.cart[i].num
    }
    return sum
  }
}

export default {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters
}
