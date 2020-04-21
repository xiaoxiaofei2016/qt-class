
import Link from 'next/link'
import Router from 'next/router'
const index2 = () => {
  function gotoIndex3() {
    // Router.push('/index3')
    Router.push({
      pathname: '/index3',
      query: {
        name: 123
      }
    })
  }

  //routeChangeStart
  //routeChangeComplete
  //beforeHistoryChange
  //routeChangeError
  //hashChangeStart
  //hashChangeComplete

  Router.events.on('routeChangeStart', (...args) => {
    console.log('routeChangeStart', ...args)
  })
  Router.events.on('beforeHistoryChange', (...args) => {
    console.log('beforeHistoryChange', ...args)
  })
  Router.events.on('routeChangeComplete', (...args) => {
    console.log('routeChangeComplete', ...args)
  })

  Router.events.on('hashChangeStart', (...args) => {
    console.log('hashChangeStart', ...args)
  })
  Router.events.on('hashChangeComplete', (...args) => {
    console.log('hashChangeComplete', ...args)
  })

 return (
  <>
    <div>我是index2</div>
    <div><Link href="/index3?name=abc"><a>去index3页面</a></Link></div>
    <div><Link href={{pathname: '/index3', query: {name: 'egm'}}}><a>去index3页面</a></Link></div>
    <div><Link href="/index4"><a>去index4页面</a></Link></div>
    <div>
      <button onClick={gotoIndex3}>去index3页面</button>
    </div>
    <div>
      <Link href="#jspang"><a>jspang</a></Link>
    </div>
  </>
 )
}

export default index2