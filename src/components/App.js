import React, { Component } from 'react';
import socket from '../socket/socket';
import { hot } from 'react-hot-loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: 0 };
  }

  componentDidMount() {
    socket.on('someEvent', data => this.setState({ data }));
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

export default hot(module)(App);
