import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import { Rating, RatingValueType } from './components/Rating/Rating';

type PageTitlePropsType = {
  value: string
}

function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [accordionCollbpsed, setAccordionCollabsed] = useState<boolean>(false);
  let [on, setOn] = useState<boolean>(false);

  return (
    <div className='container'>
      <PageTitle value={'This is App component'} />

      <Accordion titleValue={'Menu'} onClick={setAccordionCollabsed} collabsed={accordionCollbpsed} />

      {/* <Accordion titleValue={'User'} onClick={setAccordionCollabsed} collabsed={accordionCollbpsed}/> */}

      {/* <Rating value={ratingValue} onClick={setRatingValue} />
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <Rating value={ratingValue} onClick={setRatingValue}/> */}

      <OnOff onClick={setOn} value={on} />
     
    </div>
  );
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.value}</h1>
}

export default App;
