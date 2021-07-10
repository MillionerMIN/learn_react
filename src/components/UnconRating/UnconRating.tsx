
import React, { useState } from "react";

export type UnconRatingPropsType =  0 | 1 | 2 | 3 | 4 | 5

type StarPropsType = {
   selected: boolean
   value: UnconRatingPropsType
   setValue: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}

function UnconRating(props: UnconRatingPropsType) {

   const [value, setValue] = useState(1);

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

   return <span>
      {props.selected ? <b style={yellow}>star </b> : 'star ' }
      </span >;
}

export {
   UnconRating
}