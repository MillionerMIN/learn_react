import { Story } from "@storybook/react";
import React from "react";
import { Meta } from '@storybook/react';
import { Accordion, AccordionPropsType } from "../components/Accordion/Accordion";
import { useState } from 'react';


export default {
   title: 'UI/Accordion',
   component: Accordion,
} as Meta;


const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
   titleValue: 'Menu',
   collapsed: false
};

export const Collapsed = Template.bind({});
Collapsed.args = {
   titleValue: 'Menu',
   collapsed: true
};

export const AccordionChange = ({onChange}:AccordionPropsType) => {
   const [collapsed, setCollabsed] = useState<boolean>(false)
   return <Accordion titleValue={'Menu'} collapsed={collapsed} onChange={() => { setCollabsed(!collapsed)}}/>
}