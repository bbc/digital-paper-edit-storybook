import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import List from '../../List';
import SearchBar from '..';
import { items, transcriptItems } from '../../dummy';
const cardActions = actions({
  handleEditItem: 'Edit button clicked',
  handleDeleteItem: 'Delete button clicked'
});

const searchActions = actions({ handleSearch: 'Handle search' });

storiesOf('Search Bar', module)
  .addDecorator(StoryRouter())
  .add('Default', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <SearchBar handleSearch={ searchActions.handleSearch } />
      </section>
    );
  })
  .add('Projects Search', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <SearchBar handleSearch={ searchActions.handleSearch } />
        <List
          items={ items }
          handleEditItem={ cardActions.handleEditItem }
          handleDeleteItem={ cardActions.handleDeleteItem }
        />
      </section>
    );
  })
  .add('Transcripts Search', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <SearchBar handleSearch={ searchActions.handleSearch } />
        <List
          type="Transcript"
          items={ transcriptItems }
          handleEditItem={ cardActions.handleEditItem }
          handleDeleteItem={ cardActions.handleDeleteItem }
        />
      </section>
    );
  });
