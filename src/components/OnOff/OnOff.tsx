import React from "react";
import style from './onOff.module.css';

export type OnOffType = {
   on: boolean
   onClick: () => void
}

export function OnOff(props: OnOffType) {




   const onStyle = {
      backgroundColor: !props.on ? "#b6b4b4" : "#38C558",
   }
   
   
   const offStyle = {
      backgroundColor: !props.on ? "#EC0E52" : "#b6b4b4",
   }
   const indicatorStyle = {
      backgroundColor: !props.on ? "#EC0E52" : "#38C558",
   }

   return <div>
      <div style={onStyle} className={style.on} onClick={props.onClick}>ON</div>
      <div style={offStyle} className={style.off} onClick={props.onClick}>OFF</div>
      <div style={indicatorStyle} className={style.indicator} onClick={props.onClick}></div>
   </div>
}
