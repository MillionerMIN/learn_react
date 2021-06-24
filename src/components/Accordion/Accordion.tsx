import React from "react"

function Accordion() {
   return (
      <div>
         <AccordionTitle title={'Menu'} />
         <AccordionBody  />
      </div>
   )
}

function AccordionTitle(props: any) {
   return <h3>{props.title}</h3>
}

function AccordionBody() {
   return <ol>
      <li></li>
      <li></li>
      <li></li>
   </ol>
}

export default Accordion;