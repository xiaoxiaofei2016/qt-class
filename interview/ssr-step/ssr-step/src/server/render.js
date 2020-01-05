import React from 'react';
import { renderToString } from 'react-dom/server'  // 服务端只能认识字符串,把html转为字符串
import Header from '../components/Header.jsx'

export default () => {
  const App = (
    <>
     <Header/>
    </>
  )
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <div id="app">${renderToString(App)}</div>
  </body>
  </html>
  `
}