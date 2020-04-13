import React, { Component } from 'react';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <ul className="my-list">
        <li>{true ? 'JSpang.com' : '技术胖'}</li>
        <li>b</li>
      </ul>
     );
    //  var child1 = React.createElement('li', null, 'a')
    //  var child2 = React.createElement('li', null, 'b')
    //  var root = React.createElement('ul', child1, child2)
  }
}
 
export default App;