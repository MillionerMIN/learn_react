import { Story } from "@storybook/react";
import React from "react";
import { Meta } from '@storybook/react';
import { Accordion, AccordionPropsType } from "../components/Accordion/Accordion";
import { useState } from 'react';



const GetCategoryObj = (categoryName: string) => ({
   table: {
      category: categoryName
   }
})

export default {
   title: 'UI/Accordion',
   component: Accordion,
   argTypes: {
      color: { 
         control: 'color' ,
         ...GetCategoryObj('Color')
      },
      collapsed: { 
         ...GetCategoryObj('Main')
      },
      titleValue: {
         ...GetCategoryObj('Main')
      }
   },
} as Meta;


const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
   titleValue: 'Menu',
   collapsed: false,
   items: [],
};

export const Collapsed = Template.bind({});
Collapsed.args = {
   titleValue: 'Menu',
   collapsed: true,
   items: [
      { name: 'Vladimir', value: 1 },
      { name: 'Anna', value: 2 },
   ]
};

export const ModeChanging: Story<AccordionPropsType> = (args) => {
   const [collapsed, setCollabsed] = useState<boolean>(false)
   return <Accordion {...args} collapsed={collapsed} onChange={() => { setCollabsed(!collapsed)}}/>
}
ModeChanging.args={
   titleValue: 'Users',
   items: [
      { name: 'Vladimir', value: 1 },
      { name: 'Anna', value: 2 },
   ],
}