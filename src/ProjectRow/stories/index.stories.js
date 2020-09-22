import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import ProjectRow from '../index.js';
import { items } from '../../dummy';

const item = items[0];

storiesOf('Project Row', module)
  .addDecorator(StoryRouter())
  .add('Default', () => {
    return (
      <section style={ { height: '75vh', overflow: 'scroll' } }>
        <ProjectRow
          key={ item.key }
          id={ item.id }
          title={ item.title }
          description={ item.description }
          url={ item.url }
          created={ '02-02-2020' }
          updated={ '02-02-2020' }
          handleDuplicateItem={ action('Duplicate button clicked') }
          handleEditItem={ action('Edit button clicked') }
          handleDeleteItem={ action('Delete button clicked') }
        />
      </section>
    );
  });
