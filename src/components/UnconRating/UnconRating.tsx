
import React, { useState } from "react";

export type UnconRatingPropsType = 0 | 1 | 2 | 3 | 4 | 5

type UnconRating = {
   defaulValue?: UnconRatingPropsType
}
type StarPropsType = {
   selected: boolean
   setValue: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}

function UnconRating({ defaulValue }: UnconRating) {

   const [value, setValue] = useState(defaulValue ? defaulValue : 0);

   return <div>
      <Star selected={value > 0} setValue={() => { setValue(1) }} />
      <Star selected={value > 1} setValue={() => { setValue(2) }} />
      <Star selected={value > 2} setValue={() => { setValue(3) }} />
      <Star selected={value > 3} setValue={() => { setValue(4) }} />
      <Star selected={value > 4} setValue={() => { setValue(5) }} />
   </div>
}

function Star(props: StarPropsType) {

   const yellow = {
      color: 'orange'
   }

   return <span>
      {props.selected ? <b style={yellow}>star </b> : 'star '}
   </span >;
}

export {
   UnconRating
}