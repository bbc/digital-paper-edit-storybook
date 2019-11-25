import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import SimpleCard from '../index.js';

export const item = {
  id: '1234',
  key: 'abc123',
  title: 'Sample Simple Card Title',
  description: 'This is a sample card description. This is fun!',
  url: '/projects/1/transcripts/1234'
};

storiesOf('Simple Card', module)
  .addDecorator(StoryRouter())
  .add('Default', () => {
    return (
      <section style={ { height: '75vh', overflow: 'scroll' } }>
        <SimpleCard
          key={ item.key }
          id={ item.id }
          title={ item.title }
          description={ item.description }
          url={ item.url }
          handleEditItem={ action('Edit button clicked') }
          handleDeleteItem={ action('Delete button clicked') }
        />
      </section>
    );
  });
