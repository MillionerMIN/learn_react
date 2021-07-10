import React from "react";
import { UncontrolledAccordion } from "../components/UncontrolledAccordion/UncontrolledAccordion";
import { Meta } from '@storybook/react';


export default {
   title: 'UI/UncontrolledAccordion',
   component: UncontrolledAccordion,
} as Meta;

export const ModeChanging = () => {
   return <UncontrolledAccordion titleValue={'Users'}/>
}