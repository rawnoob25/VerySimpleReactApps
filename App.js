import React, { Component } from 'react';
import './App.css';

let yogiBerraQuote = "In theory, theory and practice are the same. In practice, they're not.";
let quote = (
  <blockquote>
    <p>{yogiBerraQuote}
    </p>
    <cite>-The late former Yankees catcher, Yogi Berra.
    </cite>
  </blockquote>
);

class App extends Component {
  render() {
    return quote;
  }
}

export default App;
