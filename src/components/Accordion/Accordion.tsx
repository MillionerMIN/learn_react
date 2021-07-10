import React from "react";
import style from './accordion.module.css';

type ItemType={
   name: string
   value: number
}

type AccordionTitlePropsType = {
   title: string
   onChange: () => void
   color?:string
} 

type AccordionBodyType = {
   items: ItemType[]

}

export type AccordionPropsType = {
   titleValue: string
   collapsed: boolean
   onChange: () => void
   /**
    * Element that are showed when is opened. Earch item should be ItemType
    */
   items: ItemType[]
   /**
    * Option color change text Title
    */
   color?: string
}

function Accordion({
   titleValue, 
   collapsed, 
   color,
   ...props}: AccordionPropsType) {
     
   return <div className={style.wrapper}>
      <AccordionTitle color={color} title={titleValue} onChange={props.onChange}/>
      {!collapsed && <AccordionBody items={props.items} />}
   </div>
   }

function AccordionTitle({title, onChange, color}: AccordionTitlePropsType) {
const style = {
   cursor: 'default',
   color: color ? color : 'black'
}
   return <h3 style={style} onClick={onChange}>-- {title} --</h3>
}



function AccordionBody({items}: AccordionBodyType) {
   return <ul>
      {items.map((i, index) => <li>{i.name}</li>)}
   </ul>
}

export {
   Accordion
} 