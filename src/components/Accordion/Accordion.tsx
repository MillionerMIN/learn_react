import React from "react"

export type AccordionPropsType = {
   titleValue: string
   collabsed: boolean
   onClick: (collapbed: boolean) => void
}

type AccordionTitlePropsType = {
   title: string
   onClick: () => void
}

function Accordion(props: AccordionPropsType) {
   return <div>
      <AccordionTitle title={props.titleValue} onClick={() => { props.onClick(!props.collabsed) }}/>

      {!props.collabsed && <AccordionBody />}
   </div>
}

function AccordionTitle(props: AccordionTitlePropsType) {
   return <h3 onClick={() => {props.onClick()}}>-- {props.title} --</h3>
}

function AccordionBody() {
   return <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
   </ul>
}

export default Accordion;