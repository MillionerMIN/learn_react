import React, { useState } from "react";

type OnOffType = {
   onChange: (on: boolean) => void
   defaultOn?: boolean
}

function UnconOnOff({ defaultOn, onChange}: OnOffType) {

   let [on, setOn] = useState(defaultOn ? defaultOn : false);

   const onStyle = {
      width: '30px',
      height: '20px',
      textAline: 'center',
      color: 'black',
      backgroundColor: !on ? "white" : "green",
      display: 'inline-block',
      cursor: 'pointer',
   }
   const offStyle = {
      width: '30px',
      height: '20px',
      textAline: 'center',
      color: 'black',
      backgroundColor: !on ? "red" : "white",
      display: 'inline-block',
      cursor: 'pointer',
   }
   const indicatorStyle = {
      width: '10px',
      height: '10px',
      marginLeft: '5px',
      border: '1px solid black',
      borderRadius: '5px',
      display: 'inline-block',
      backgroundColor: !on ? "red" : "green",
   }

   const onClicked = () => {
      setOn(true)
      onChange(true)
   }

   const offCliked = () => {
      setOn(false)
      onChange(false)
   }

   return <div>
      <div style={onStyle}
         onClick={onClicked}>ON</div>
      <div style={offStyle} onClick={offCliked}>OFF</div>
      <div style={indicatorStyle} onClick={() => { setOn(false) }}></div>
   </div>
}

export {
   UnconOnOff
}