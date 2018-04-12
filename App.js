import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


let dessertString = 'Nothing';

function isJudgmental() {
  dessertString = (Math.random()<0.5)?'blueberry and acai smoothie':'double fudge brownie';
  console.log(dessertString)
}

let favMeals = (
  <div>
    <h1>Favorite Meals</h1>
    <button onClick = {isJudgmental}>Click for dessert</button> 
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
    console.log(dessertString)
    return (
      <div>{favMeals}</div>
    );
  }
}

export default App;
