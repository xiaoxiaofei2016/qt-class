import React from 'react'
// 组件 每个路由 独立的url head
import Head from 'next/head'
import { Button } from 'antd'
// import Nav from '../components/nav'
import Header from '../components/header.jsx'
const Home = () => (
  <>
   <Head>
     <title>Home</title>
   </Head>
   <Header/>
   <div>
     <Button>我是按钮</Button>
   </div>
  </>
)

export default Home
