import React, { Component } from 'react';
import './App.css';

let input = (
  <div>
    Add to list: <input id = 'toAdd' type = 'text' name = 'toAdd' value='Something' />
  </div>
);

let items = [];

function add(){
  let theInput = document.getElementById('toAdd');
  items.push(theInput.value);
}

let addBtn = (
  <div><button onClick = {add}>Add to List</button></div>
);

let listElements = items.map(e=><li>{e}</li>);
let listOfItems = <ul>{listElements}</ul>

let container = (
  <div>
    <div>{input}</div>
    <div>{addBtn}</div>
    <div>{listOfItems}</div>
  </div>
);

class App extends Component {
  render() {
    return container;
  }
}

export default App;
