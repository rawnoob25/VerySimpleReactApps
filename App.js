import React, { Component } from 'react';
import './App.css';

let palindromeStrings = ['able','was','i','ere','i','saw','elba']

let palindromeStringsList = palindromeStrings.map(e=><li>{e}</li>);
let theList = <ul>{palindromeStringsList}</ul>
class App extends Component {
  render() {
    return theList
  }
}

export default App;
