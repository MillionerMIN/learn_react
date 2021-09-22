import React from 'react';
import { storiesOf } from '@storybook/react';
import { CardApplication } from './CardApplication';

storiesOf('Tutorial/Design System/CardApplication', module).add(
  'Primary',
  () => <CardApplication></CardApplication>
);
