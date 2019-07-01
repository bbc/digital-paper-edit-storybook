import React from 'react';

import { storiesOf } from '@storybook/react';

import Settings from '../index.js';

storiesOf('Labels', module)
  // .addDecorator(withKnobs)
  .add('default', () => {

    return (
      <Settings />
    );})
    .add('default 2', () => {

      return (
        <Settings />
      );})
