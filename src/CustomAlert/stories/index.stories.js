import React from 'react';
import { storiesOf } from '@storybook/react';
import CustomAlert from '../index.js';

export const alertProps = {
  variant: 'danger',
  heading: 'Error could not contact the server',
  message: 'There was an error trying to create this transcript on the server',
  show: true
};

storiesOf('Custom Alert', module)
  .add('Default', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <CustomAlert
          { ...alertProps }
        />
      </section>
    );
  });