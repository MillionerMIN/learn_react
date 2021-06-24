import React from 'react';

import './App.css';
import Accordion from './components/Accordion/Accordion';
import { Rating } from './components/Rating/Rating';

function App() {
  return (
    <div>
      <PageTitle value={'This is App component'} />

      Articl 1
      <Rating value={1}/>

      <Accordion />

      Articl 2
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>
  );
}

function PageTitle(props: any) {
  return <h1>{props.value}</h1>
}

export default App;
