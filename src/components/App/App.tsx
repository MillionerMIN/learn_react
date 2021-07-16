import React, { useState } from 'react';
import { Accordion } from '../Accordion/Accordion';
import { Button } from '../Button/Button';
import { OnOff } from '../OnOff/OnOff';
import { Rating, RatingValueType } from '../Rating/Rating';
import {UnconOnOff} from '../UncontroledOnOff/UnconOnOff';
import style from './app.module.css';

type PageTitlePropsType = {
  value: string
}

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [accordionCollpsed, setAccordionCollapsed] = useState<boolean>(false);
  const [swichOn, setSwichOn] = useState<boolean>(false);

  const data = {
    items: [
      { name: 'Vladimir', value: 1 },
      { name: 'Anna', value: 2 },
    ]
  }
  return (
    <div className={style.container}>
      <PageTitle value={'This is App component'} />

      <Accordion titleValue={'Users'} 
      onChange={() => { setAccordionCollapsed(!accordionCollpsed) }} 
      collapsed={accordionCollpsed}
      items={data.items} />


      <Rating value={ratingValue} onClick={setRatingValue} />

      <OnOff onClick={() => { setSwichOn(!swichOn) }} on={swichOn} />

      <UnconOnOff onChange={setSwichOn} /> {swichOn.toString()}

      <Button primery='primery' label='Кнопка'/>
      
      <Button primery='secondary' label='Secondary'/>
    </div>
  );
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.value}</h1>
}

export default App;
