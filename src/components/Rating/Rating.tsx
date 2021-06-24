
import React from "react";

type RatingPropsType = {
   value: 1 | 2 | 3 | 4 | 5
}

type StarPropsType = {
   selected: boolean
}

export function Rating(props: RatingPropsType) {

   switch (props.value) {
      case 1:
         return <div>
            <Star selected={true} />
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
         </div>
      case 2:
         return <div>
            <Star selected={true} />
            <Star selected={true} />
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
         </div>
      case 3:
         return <div>
            <Star selected={true} />
            <Star selected={true} />
            <Star selected={true} />
            <Star selected={false} />
            <Star selected={false} />
         </div>
      case 4:
         return <div>
            <Star selected={true} />
            <Star selected={true} />
            <Star selected={true} />
            <Star selected={true} />
            <Star selected={false} />
         </div>
      case 5:
         return <div>
            <Star selected={true} />
            <Star selected={true} />
            <Star selected={true} />
            <Star selected={true} />
            <Star selected={true} />
         </div>
      default:
         return <div>
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
         </div>
   }
}

function Star(props: StarPropsType) {


   if (props.selected === true) {
      return <span style={{ color: 'yellow' }}><b>star </b></span>;
   } else {
      return <span>star </span>;
   };
}