import React from "react";

type OnOffType = {
   on: boolean
   onChange: () => void
}

function OnOff(props: OnOffType) {

   const onStyle = {
      width: '30px',
      height: '20px',
      textAline: 'center',
      color: 'black',
      backgroundColor: props.on ? "white" : "green",
      display: 'inline-block',
      cursor: 'pointer',
   }
   const offStyle = {
      width: '30px',
      height: '20px',
      textAline: 'center',
      color: 'black',
      backgroundColor: props.on ? "red" : "white",
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
      backgroundColor: props.on ? "red" : "green",
   }

   return <div>
      <div style={onStyle} onClick={props.onChange}>ON</div>
      <div style={offStyle} onClick={props.onChange}>OFF</div>
      <div style={indicatorStyle} onClick={props.onChange}></div>
   </div>
}

export default OnOff;