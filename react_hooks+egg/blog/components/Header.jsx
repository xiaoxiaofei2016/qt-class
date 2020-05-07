import React, {useState, useEffect} from 'react';
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import '../public/style/components/header.css';
import { Row, Col, Menu } from 'antd';
import { HomeOutlined, YoutubeOutlined, SmileOutlined } from '@ant-design/icons'

const Header = () => {

  const [navArray, setNavArray] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo).then(res => {
        return res.data.data
      })
      setNavArray(result)
    }
    fetchData()
  }, [])

  const handleClick = (e) => {
    if (e.key == 0) {
      Router.push('/index')
    } else {
      Router.push('/list?id=' + e.key)
    }
  }

  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">技术胖</span>
          <span className="header-text">专注前端开发</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" onClick={handleClick}>
            {/* <Menu.Item key="home">
              <HomeOutlined />
              首页
            </Menu.Item> */}
            {
              navArray.map((item) => {
                return (
                  <Menu.Item key={item.id}>
                    {item.typeName}
                  </Menu.Item>
                )
              })
            }
            {/* <Menu.Item key="video">
              <YoutubeOutlined />
              视频
            </Menu.Item>
            <Menu.Item key="life">
              <SmileOutlined />
              生活
            </Menu.Item> */}
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header;