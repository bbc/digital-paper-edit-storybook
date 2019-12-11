import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import SimpleCard from '../index.js';
import { items } from '../../dummy';

const item = items[0];

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
