import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { OnOff, OnOffType } from '../components/OnOff/OnOff';


export default {
   title: 'UI/OnOff',
   component: OnOff,
} as Meta;

// export const OnMode = () => <OnOff on={false} onChange={action('on or off clicking')} />
// export const OffMode = () => <OnOff on={true} onChange={action('on or off clicking')}  />
const Template: Story<OnOffType> = (args) => <OnOff {...args} />

export const OnMode = Template.bind({});
OnMode.args = {
   on: true,
}
export const OffMode = Template.bind({});
OffMode.args = {
   on: false,
}

export const ModeChanging = () => {
   // Sets the hooks for both the label and primary props
   const [value, setValue] = useState(true);

   return (<>
   <OnOff on={value} onClick={() => { setValue(!value) }} />
      <div>{value.toString()}</div>
   </>
   )
};