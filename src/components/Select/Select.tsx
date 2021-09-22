import React, { ReactElement } from "react";
import s from './Select.module.css'
import Arrow from './down.svg';

type PersonType = {
   id: number
   name: string
}

type SelectTitleType = {
   title: string
   children?: ReactElement<any, any>
}

type SelectBodyType = {
   items: PersonType[]
}

export type SelectType = {
   title: string
   items: PersonType[]
   onChange: () => void
}

function Select({ title, items }: SelectType) {



   // function showPersonSelect(array: []) {

   //    array.map(item => {
   //       return <div>{item}</div>
   //    });

   // }

   return <div className={s.wrapper}>
      {/* <div className={s.title}>{items}</div> */}

      <div className={s.btn}>
         <SelectTitle title={title}></SelectTitle>
      </div>
      <SelectBody items={items} />
   </div>
}

const SelectTitle = ({ title }: SelectTitleType) => {
   return <div className={s.title}>{title}</div>

}

const SelectBody = ({ items }: SelectBodyType) => {
   return <div>
      {items.map((item, index) => <div key={index}>{item.name}</div>)}
   </div>
}

export {
   Select,
   SelectBody
}