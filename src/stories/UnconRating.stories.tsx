import { Meta } from '@storybook/react';

import { UnconRating } from '../components/UnconRating/UnconRating';

export default {
   title: 'UI/UnconRating stories',
   component: UnconRating,
} as Meta;

export const EmptyRating = () => <UnconRating defaulValue={0} />
export const Rating1 = () => <UnconRating defaulValue={1}  />
export const Rating2 = () => <UnconRating defaulValue={2}  />
export const Rating3 = () => <UnconRating defaulValue={3}  />
export const Rating4 = () => <UnconRating defaulValue={4}  />
export const Rating5 = () => <UnconRating defaulValue={5}  />


