import React, { Component } from 'react'
import Context from './Context'
const { Consumer } = Context
class SubSon extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {
            (theme) => {
              return (
                <p style={{
                  color: theme
                }}>text</p>
              )
            }
          }
        </Consumer>
      </div>
    )
  }
}
export default SubSon