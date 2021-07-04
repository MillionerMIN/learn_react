import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import { Rating, RatingValueType } from './components/Rating/Rating';
import UnconOnOff from './components/UncontroledOnOff/UnconOnOff';

type PageTitlePropsType = {
  value: string
}

function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [accordionCollpsed, setAccordionCollapsed] = useState<boolean>(false);
  let [swichOn, setSwichOn] = useState<boolean>(false);

  return (
    <div className='container'>
      <PageTitle value={'This is App component'} />

      <Accordion titleValue={'Menu'} onChange={() => { setAccordionCollapsed(!accordionCollpsed) }} collapsed={accordionCollpsed} />

      {/* <Accordion titleValue={'User'} onClick={setAccordionCollabsed} collabsed={accordionCollbpsed}/> */}

      <Rating value={ratingValue} onClick={setRatingValue} />

      {/* <OnOff onChange={() => { setSwichOn(!swichOn) }} on={swichOn} /> */}

      <UnconOnOff onChange={setSwichOn} /> {swichOn.toString()}
    </div>
  );
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.value}</h1>
}

export default App;
