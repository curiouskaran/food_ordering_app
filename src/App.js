import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hammer from 'rc-hammerjs';

class App extends Component {

  handleTap = (event) => {
    console.log("event on tap",event);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React/Electron</h2>
          <Hammer onTap={this.handleTap}><div>Tap Me</div></Hammer>
        </div>
        <p className="App-intro">
          Hello Electron!
        </p>
      </div>
    );
  }
}

export default App;
