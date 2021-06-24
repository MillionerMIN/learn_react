import React from 'react';

import './App.css';
import Accordion from './components/Accordion/Accordion';
import { Rating } from './components/Rating/Rating';

type PageTitlePropsType = {
  value: string
}

function App() {
  return (
    <div className='container'>
      <PageTitle value={'This is App component'} />

     
      <Rating value={1} />

      <Accordion titleValue={'Menu'} collabsed={true} />

      <Accordion titleValue={'User'} collabsed={false} />

      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>
  );
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.value}</h1>
}

export default App;
