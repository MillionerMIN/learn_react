import React from 'react';

import './App.css';

function App() {
  return (
    <div>
      <AppTitle />

      <Rating />

      <Accordion />
    </div>
  );
}

function AppTitle() {
  return <>This is App component</>
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
      <AccordionTitle/>
      <AccordionBody/>
    </div>
  )
}

function AccordionTitle() {
  return <h3>Menu</h3>
}

function AccordionBody() {
  return (
    <ol>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  )
}

export default App;
