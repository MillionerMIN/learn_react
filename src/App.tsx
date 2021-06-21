import React from 'react';

import './App.css';

function App() {
  return (
    <div>
      This is App component

      <Rating />

      <Accordion />
    </div>
  );
}

function Rating() {
  return (
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  )
}

function Star() {
  return <div>star</div>
}

function Accordion() {
  return (
    <div>
      <h3>Menu</h3>
      <ol>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </div>
  )
}

export default App;
