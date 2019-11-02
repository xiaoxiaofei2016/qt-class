import { includes } from 'lodash'
import React from 'react'
import reactDom from 'react-dom'
import App from './App'
// import groupBy from 'lodash/groupBy'
import { add, sub } from './utils'
console.log(add(1, 2))

reactDom.render(<App/>, document.getElementById('app'))
