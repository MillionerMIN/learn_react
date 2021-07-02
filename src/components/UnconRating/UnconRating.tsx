
import React, { useState } from "react";

type UnconRatingPropsType = {
   value: 0 | 1 | 2 | 3 | 4 | 5
}

type StarPropsType = {
   selected: boolean
   value: 1 | 2 | 3 | 4 | 5
   setValue: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}

export function UnconRating(props: UnconRatingPropsType) {

   const [value, setValue] = useState(4);

   return <div>
      <Star selected={value > 0} setValue={setValue} value={1} />
      <Star selected={value > 1} setValue={setValue} value={2}/>
      <Star selected={value > 2} setValue={setValue} value={3}/>
      <Star selected={value > 3} setValue={setValue} value={4}/>
      <Star selected={value > 4} setValue={setValue} value={5}/>
   </div>
}

function Star(props: StarPropsType) {

   const yellow = {
      color: 'yellow'
   }

   return <span onClick={() => { props.setValue(props.value) }}>
      {props.selected ? <b style={yellow}>star </b> : 'star ' }
      </span >;
}