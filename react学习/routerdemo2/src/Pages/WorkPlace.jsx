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
              <Link to="/viedo/reactPage">React教程</Link>
            </li>
            <li>
              <Link to="/viedo/Flutter">Flutter教程</Link>
            </li>
            <li>
              <Link to="/viedo/Vue">Vue教程</Link>
            </li>
          </ul>
      </div>
      <div className="videoContent">
        <div><h3>视频教程</h3></div>
        <Route path="/viedo/reactPage" component={ReactPage}/>
        <Route path="/viedo/Flutter" component={Flutter}/>
        <Route path="/viedo/Vue" component={Vue}/>
      </div>
    </>
  )
}