import { useState } from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Rating, RatingValueType } from './Rating';

export default {
   title: 'UI/Rating stories',
   component: Rating,
   decorators: [
      (Story) => (
         <div style={{ 
            margin: '1em',
            width: '160px',
            border: '1px solid #000',
            borderRadius: '2px',
          }}>
            <Story />
         </div>
      ),
   ],
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = args => <Rating {...args} />

export const Default = Template.bind({});
Default.args = {
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

export const RatingChange = () => {
   const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
   return <Rating value={ratingValue} onClick={setRatingValue} />
}

