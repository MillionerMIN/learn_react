import React, { useState } from "react";
// type OnOffType = {

// }

function OnOff(params: any) {

   let [on, setOn] = useState(false);


   const onStyle = {
      width: '30px',
      height: '20px',
      textAline: 'center',
      color: 'black',
      backgroundColor: on ? "white" : "green",
      display: 'inline-block',
      cursor: 'pointer',
   }
   const offStyle = {
      width: '30px',
      height: '20px',
      textAline: 'center',
      color: 'black',
      backgroundColor: on ? "red" : "white",
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
      backgroundColor: on ? "red" : "green",
   }

   return <div>
      <div style={onStyle} onClick={() => { setOn(false) }}>ON</div>
      <div style={offStyle} onClick={() => { setOn(true) }}>OFF</div>
      <div style={indicatorStyle} onClick={() => { setOn(false) }}></div>
   </div>
}

export default OnOff;