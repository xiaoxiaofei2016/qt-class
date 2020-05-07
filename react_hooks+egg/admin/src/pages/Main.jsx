import React from 'react'
import { Route, BrowserRouter as Router} from 'react-router-dom'
import Login from './Login.jsx'
import AdminIndex from './AdminIndex.jsx'
function Main() {
  return (
    <Router>
      <Route path='/login/' exact component={Login}/>
      <Route path='/index/' exact component={AdminIndex}/>
    </Router>
  )
}

export default Main