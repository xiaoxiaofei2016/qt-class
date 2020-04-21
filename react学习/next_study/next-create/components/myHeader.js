import Head from 'next/head'
import '../public/index.css'
import { Button } from 'antd'

function MyHeader(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta charSet='utf-8'></meta>
      </Head>
      <Button>antd按钮</Button>
    </>
  )
}

export default MyHeader