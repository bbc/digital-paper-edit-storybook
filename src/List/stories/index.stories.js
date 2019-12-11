import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import List from '../index.js';
import { items, transcriptItems } from '../../dummy';

const cardActions = actions({
  handleEditItem: 'Edit button clicked',
  handleDeleteItem: 'Delete button clicked'
});

storiesOf('List', module)
  .addDecorator(StoryRouter())
  .add('Simple Cards', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <List
          items={ items }
          handleEditItem={ cardActions.handleEditItem }
          handleDeleteItem={ cardActions.handleDeleteItem }
        />
      </section>
    );
  })
  .add('Transcript Cards', () => (
    <section style={ { height: '100%', overflow: 'scroll' } }>
      <List
        items={ transcriptItems }
        handleEditItem={ cardActions.handleEditItem }
        handleDeleteItem={ cardActions.handleDeleteItem }
        type="transcript"
      />
    </section>
  ));
