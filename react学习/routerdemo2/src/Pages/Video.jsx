import React from 'react'
import Flutter from './video/Flutter.jsx'
import ReactPage from './video/ReactPage.jsx'
import Vue from './video/Vue.jsx'
import { Route, Link } from 'react-router-dom'

function Video() {
  return (
    <>
      <div>
        <div className="topNav"></div>
          <ul>
            <li>
              <Link to="/video/reactPage">React教程</Link>
            </li>
            <li>
              <Link to="/video/Flutter">Flutter教程</Link>
            </li>
            <li>
              <Link to="/video/Vue">Vue教程</Link>
            </li>
          </ul>
      </div>
      <div className="videoContent">
        <div><h3>视频教程</h3></div>
        <Route path="/video/reactPage" component={ReactPage}/>
        <Route path="/video/Flutter" component={Flutter}/>
        <Route path="/video/Vue" component={Vue}/>
      </div>
    </>
  )
}

export default Video