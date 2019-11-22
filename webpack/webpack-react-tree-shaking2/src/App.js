import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
// import './app.scss';
import stylesObj from './app.scss'
console.log(stylesObj)
class App extends React.Component {
	render () {
		return (
			<div>
        <p className={stylesObj.item}>89</p>
        <h2>h2</h2>
        <img src="./assets/img/user.jpg"/>
        1234swdcfvaqs
			</div>
		)
	}
}

export default hot(module)(App);
