import React from 'react'
import { Route, BrowserRouter as Router} from 'react-router-dom'
import Login from './Login.jsx'
import AdminIndex from './AdminIndex.jsx'
function Main() {
  return (
    <Router>
      <Route path='/' exact component={Login}/>
      <Route path='/index/' component={AdminIndex}/>
    </Router>
  )
}

export default Main