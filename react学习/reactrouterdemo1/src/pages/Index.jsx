import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { cid: 123, title: 'ancasndjka'},
        { cid: 456, title: 'ancas氨溴索写啊ndjka'},
        { cid: 789, title: '不对称的'}
      ]
    }
    this.props.history.push('/home/')
  }

  render() {
    return (
      <>
        {/* <Redirect to="/home/"/> */}
        <h2>JSPang</h2>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index + item}>
                  <Link to={'/list/'+ item.cid}>
                    {item.title}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </>
    );
  }
}

export default Index;