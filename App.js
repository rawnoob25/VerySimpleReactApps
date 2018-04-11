import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


let dessertString = 'Nothing';

function isJudgmental() {
  dessertString = Math.random()<0.5?'blueberry and acai smoothie':'double fudge brownie';
}

let favMeals = (
  <div>
    <h1 onClick = {isJudgmental}>Favorite Meals (click for dessert)</h1>
    <ul>
      <li>Breakfast: oatmeal, milk and raisins</li>
      <li>Lunch: tuna sandwich</li>
      <li>Dinner: Salmon steak and broccoli</li>
      <li>Pre-bed dessert: {dessertString} </li>
    </ul>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>{favMeals}</div>
    );
  }
}

export default App;
