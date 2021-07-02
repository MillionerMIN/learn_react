import React, { useState } from "react";
type OnOffType = {
   value: boolean
   onClick: (on: boolean) => void
}

function OnOff(props: OnOffType) {

  


   const onStyle = {
      width: '30px',
      height: '20px',
      textAline: 'center',
      color: 'black',
      backgroundColor: props.value ? "white" : "green",
      display: 'inline-block',
      cursor: 'pointer',
   }
   const offStyle = {
      width: '30px',
      height: '20px',
      textAline: 'center',
      color: 'black',
      backgroundColor: props.value ? "red" : "white",
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
      backgroundColor: props.value ? "red" : "green",
   }

   return <div>
      <div style={onStyle} onClick={() => { props.onClick(!props.value) }}>ON</div>
      <div style={offStyle} onClick={() => { props.onClick(!props.value) }}>OFF</div>
      <div style={indicatorStyle} onClick={() => { props.onClick(props.value) }}></div>
   </div>
}

export default OnOff;