import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: ''
    }
  }

  componentDidMount() {
    console.log(this.props)
    let temId = this.props.match.params.id
    this.setState({
      id: temId
    })
  }

  render() {
    return (
      <div>
        List{this.state.id}
      </div>
    );
  }
}

export default List;