// Button.stories.ts | Button.stories.tsx

import React, { useState } from 'react'

import { ComponentStory, Meta } from '@storybook/react';

import { Rating } from './Rating';

export default {
   component: Rating,
   title: 'Rating',
} as Meta;

const Template: ComponentStory<typeof Rating> = (arg) => <Rating {...arg} />

export const Empty = Template.bind({});
Empty.args = {
   value: 0,
};

export const Rating1 = Template.bind({});
Rating1.args = {
   value: 1,
};

export const Rating2 = Template.bind({});
Rating2.args = {
   value: 2,
};

export const Rating3 = Template.bind({});
Rating3.args = {
   value: 3,
};
export const Rating4 = Template.bind({});
Rating4.args = {
   value: 4,
};
export const Rating5 = Template.bind({});
Rating5.args = {
   value: 5,
};

export const RatingChanging = () => {
   // Sets the hooks for both the label and primary props
   const [rating, setRating] = useState<0|1|2|3|4|5>(1);

   return <Rating value={rating} onClick={setRating} />;
};