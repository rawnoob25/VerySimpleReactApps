import React, { Component } from 'react';
import './App.css';

const awesomeQuoteText = 'The world is full of objects, more or less interesting; I do not wish to add anymore';
const picInfo = {
  src: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Douglas_Huebler.jpg',
  title: 'Douglas Huebler'
};

const quote = (
  <blockquote>
    <p>
      {awesomeQuoteText}
    </p>
    <cite>
      -{picInfo.title}
    </cite>
  </blockquote>
);

class App extends Component {
  render() {
    return (
      <div>
        {quote}
        <img src = {picInfo.src} alt = {picInfo.title} />
      </div>
      
    );
  }
}

export default App;
