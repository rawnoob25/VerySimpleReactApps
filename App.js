import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const paras = (
  <div>
    <p class = 'p1'>
    I am p1.
    </p>
    <p class = 'p2'>
    I am p2.
    </p>
  </div>
);


const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

const gooseImg1 = <img src = {goose} alt = 'goose orig'  /> /*gotta put regular js expression inside braces when it's embedded inside of jsx*/ 
const gooseImg2 = <img src = {goose} alt = 'goose orig' height = '500' />
class App extends Component {
  render() {
    return (
      <div>
        <div>{gooseImg1}</div>
        <div>{gooseImg2}</div>
      </div>
    );
    /*
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
    */
  }
}

export default App;
