import React from "react"

export type AccordionPropsType = {
   titleValue: string
   collapsed: boolean
   onChange: () => void
}

type AccordionTitlePropsType = {
   title: string
   onChange: () => void
}

function Accordion(props: AccordionPropsType) {
   return <div>
      <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
      {!props.collapsed && <AccordionBody />}
   </div>
}

function AccordionTitle(props: AccordionTitlePropsType) {
const style = {
   cursor: 'default',
}
   return <h3 style={style} onClick={props.onChange}>-- {props.title} --</h3>
}

function AccordionBody() {
   return <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
   </ul>
}

export default Accordion;