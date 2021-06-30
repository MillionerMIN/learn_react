import React from 'react';

import './App.css';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import { Rating } from './components/Rating/Rating';

type PageTitlePropsType = {
  value: string
}

function App() {
  return (
    <div className='container'>
      <PageTitle value={'This is App component'} />

      <Accordion titleValue={'Menu'} collabsed={true} />

      <Accordion titleValue={'User'} collabsed={false} />

      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />

      <OnOff />
    </div>
  );
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.value}</h1>
}

export default App;
