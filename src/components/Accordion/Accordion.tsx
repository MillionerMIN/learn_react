import React from "react";
import style from './accordion.module.css';

export type AccordionPropsType = {
   titleValue: string
   collapsed: boolean
   onChange: () => void
}

type AccordionTitlePropsType = {
   title: string
   onChange: () => void
}

function Accordion({
   titleValue, 
   collapsed, 
   ...props}: AccordionPropsType) {
   return <div className={style.wrapper}>
      <AccordionTitle title={titleValue} onChange={props.onChange}/>
      {!collapsed && <AccordionBody />}
   </div>
}

function AccordionTitle({title, onChange}: AccordionTitlePropsType) {
const style = {
   cursor: 'default',
}
   return <h3 style={style} onClick={onChange}>-- {title} --</h3>
}

function AccordionBody() {
   return <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
   </ul>
}

export {
   Accordion
} 