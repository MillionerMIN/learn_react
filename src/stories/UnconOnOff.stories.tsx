import { Meta } from "@storybook/react";
import React from "react";
import { UnconOnOff } from "../components/UncontroledOnOff/UnconOnOff";


export default{
   title: 'UI/UnconOnOff',
   component: UnconOnOff,
} as Meta;


export const OnMode = () => <UnconOnOff defaultOn={true} onChange={()=> {}}/>
export const OffMode = () => <UnconOnOff defaultOn={false} onChange={()=> {}}/>

