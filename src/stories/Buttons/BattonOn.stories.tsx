import React from "react";
import { Meta, Story } from '@storybook/react';

import { Button, ButtonType } from '../../components/Button/Button';

export default {
   title: 'Button',
   component: Button,
   argTypes: { onClick: { action: 'clicked' } },
} as Meta;

export const Template: Story<ButtonType> = (args) => <Button {...args} />

export const Primery = Template.bind({});
Primery.args = {
   label: 'Primery',
   primery: 'primery',
};

export const Secondary = Template.bind({});
Secondary.args = {
   label: 'Secondary',
   primery: 'secondary',
};

export const Default = Template.bind({});
Default.args = {
   label: 'Default',
   primery: 'default',
};