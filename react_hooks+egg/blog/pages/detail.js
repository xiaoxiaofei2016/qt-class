import Head from 'next/head'
import { Row, Col, Breadcrumb, Affix } from 'antd'
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons'
import Header from '../components/Header.jsx'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../public/style/pages/detailed.css'
// import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import axios from 'axios'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import Tocify from '../components/tocify.tsx'
import servicePath from '../config/apiUrl'

const Detailed = (props) => {
  const tocify = new Tocify()
  const renderer = new marked.Renderer()

  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>`
  }

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false, // 容错
    sanitize: false, // 不忽略html
    tables: true,
    breaks: false,
    smartLists: true,
    highlight: function(code) {
      return hljs.highlightAuto(code).value
    }
  })

  let html = props.marked(props.article_content)
  return (
    <div className="container">
      <Head>
        <title>Home</title>
      </Head>
      <Header></Header>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/">首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="/">视频列表</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  XXX
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className="detailed-title">你哈</div>
            </div>
            <div className="list-icon center">
              <span><CalendarOutlined /> 2020-5-2</span>
              <span><FolderOutlined /> 视频教程</span>
              <span><FireOutlined /> 2222人</span>
            </div>
            <div className="detailed-content"
              dangerouslySetInnerHTML={{__html: html}}
            >
              {/* <ReactMarkdown
                source={markdown}
                escapeHtml={false}
              /> */}
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author></Author>
          <Advert></Advert>
          <Affix offsetTop={5}>
          {/* Affix导航固定右侧 */}
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章列表</div>
                {tocify && tocify.render()}
              {/* <MarkNav
                className="article-menu"
                source={html}
                // headingTopOffset={0}
                ordered={true} // 是否有编号
              /> */}
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer/>
    </div>
  )
}

Detailed.getInitialProps = async (context) => {
  console.log(context.query.id)
  let id = context.query.id
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleById + id).then(res => {
      console.log(res)
      resolve(res.data.data[0])
    }).catch(err => {
      console.log(err, 'err')
    })
  })
  return await promise
}

export default Detailed

