import React, { useState } from "react"

type UncontrolledAccordionPropsType = {
   titleValue: string
}

type UncontrolledAccordionTitlePropsType = {
   title: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

   const [toggle, setToogle] = useState(false)
   return <div>
      <UncontrolledAccordionTitle title={props.titleValue} />
      {toggle ? <AccordionBody /> : ''}
      <button onClick={() => { setToogle(true)}}>TOGGLE</button>
   </div>
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
   return <h3>-- {props.title} --</h3>
}

function AccordionBody() {
   return <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
   </ul>

}

export default UncontrolledAccordion;