import React, { useState } from 'react';
import { Accordion } from '../Accordion/Accordion';
import { OnOff } from '../OnOff/OnOff';
import { Rating, RatingValueType } from '../Rating/Rating';
import UnconOnOff from '../UncontroledOnOff/UnconOnOff';
import style from './app.module.css';

type PageTitlePropsType = {
  value: string
}

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [accordionCollpsed, setAccordionCollapsed] = useState<boolean>(false);
  const [swichOn, setSwichOn] = useState<boolean>(false);

  return (
    <div className={style.container}>
      <PageTitle value={'This is App component'} />

      <Accordion titleValue={'Menu'} onChange={() => { setAccordionCollapsed(!accordionCollpsed) }} collapsed={accordionCollpsed} />

      {/* <Accordion titleValue={'User'} onClick={setAccordionCollabsed} collabsed={accordionCollbpsed}/> */}

      <Rating value={ratingValue} onClick={setRatingValue} />

      <OnOff onClick={() => { setSwichOn(!swichOn) }} on={swichOn} />

      <UnconOnOff onChange={setSwichOn} /> {swichOn.toString()}
    </div>
  );
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.value}</h1>
}

export default App;
