import React, { Component } from 'react';
import './App.css';




class App extends Component {
  msg(){
    alert('You have been clicked.');
  }
  render() {
    return (
      <button onClick = {this.msg}>Click me!</button>
    );
  }
}

export default App;
