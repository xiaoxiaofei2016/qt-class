import Link from 'next/link'
import { withRouter } from 'next/router'
import axios from 'axios'



const index3 =  ({router, list}) => {

  return (
    <>
      <div>路由参数：{router.query.name}</div>
      <div>{list}</div>
      <Link href="/index2"><a>返回首页</a></Link>
    </>
    )
}

index3.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
    .then(res => {
      console.log(res, '远程数据结果')
      resolve(res.data.data)
    })
  })
  return await promise
}



export default withRouter(index3)