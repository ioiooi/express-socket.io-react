import React, { Component } from 'react';
import socket from '../socket/socket';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: 0 }
  }
  
  componentDidMount() {
    socket.on('randomInt', data => this.setState({ data }))
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <p>Why, hello there.</p>
        <p>{data}</p>
      </div>
    );
  }
}

export default App;
