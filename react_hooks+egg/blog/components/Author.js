import react from 'react'
import {Avatar, Divider} from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'
import '../public/style/components/author.css'

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div><Avatar size={100} src="http://hiphotos.baidu.com/doc/pic/item/8b82b9014a90f60367734e773312b31bb051ed3b.jpg" /></div>
      <div className="author-introduction">
        You are the css in my html.
        <Divider>社交账号</Divider>
        <Avatar size={28} icon={<GithubOutlined />} className="account"/>
        <Avatar size={28} icon={<QqOutlined />} className="account"/>
        <Avatar size={28} icon={<WechatOutlined />} className="account"/>
      </div>
    </div>
  )
}

export default Author;