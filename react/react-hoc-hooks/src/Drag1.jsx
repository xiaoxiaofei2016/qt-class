import React, { Component } from 'react';

class Drag1 extends Component {
  state = {
    left: 0,
    top: 0
  }
  handleMove = (e) => {
    let left = e.clientX - this.startx
    let top = e.clientY - this.starty
    this.setState({
      left,
      top
    })
  }
  handleUp = (e) => {
    document.removeEventListener('mousemove', this.handleMove) // 清理mousemove
  }
  handleDown = (e) => {
    let objClientRect = e.target.getBoundingClientRect()
    this.startx = 0
    this.starty = 0
    document.addEventListener('mousemove', this.handleMove)
    document.addEventListener('mouseup', this.handleUp)
  }
  render() {
    const { left, top } = this.state
    return (
      <div style={{left, top}} onMouseDown={this.handleDown} className="drag">
        h2
      </div>
    )
  }
}
export default Drag1;