import { Story, Meta } from '@storybook/react';
import React from "react";
import { Select, SelectType } from "./Select";

export default {
   title: 'UI/Select',
   component: Select,
} as Meta;

const Template: Story<SelectType> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
   title: 'I went',
};

export const ModeChanging: Story<SelectType> = (args) => {
   
   return <Select {...args}  onChange={() => {  }} />
}