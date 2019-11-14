import React, { Component } from 'react'
import axios from './axios.js'
import { Pagination } from 'antd';
const perSize = 40
const tabMap = {
  'ask': '问答',
  'job': '招聘',
  'share': '分享',
  'good': '精华'
}
class Home extends Component {
  state = {
    current: 1,
    tab: 'all',
    limit: perSize,
    list: []
  }
  handleRequestList = () => {
    const { tab, limit, current } = this.state
    axios.get(`/topics?tab=${tab}&limit=${limit}&page=${current}`).then(res => {
      console.log(res.data)
      this.setState({
        list: res.data
      })
    })
  }
  onChange = page => {
    console.log(page)
    this.setState({
      current: page
    })
  }
  render() {
    const { list } = this.state
    return (
      <div>
        Home
        <ul>
          <li></li>
        </ul>
        <Pagination current={this.state.current} onChange={this.onChange} total={48} />
      </div>
    )
  }
}
export default Home