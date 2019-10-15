import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import List from '../../List';
import SearchBar from '..';

const cardActions = actions({
  handleEditItem: 'Edit button clicked',
  handleDeleteItem: 'Delete button clicked'
});

const searchActions = actions({ handleSearch: 'Handle search' });

const items = [ {
  id: '1234',
  key: 'abc123',
  title: 'Sample Simple Card Title One',
  description: 'This is a sample card description. This is fun!',
  display: true,
  url: '/projects/1/transcripts/1234'
}, {
  id: '5678',
  key: 'def456',
  title: 'Sample Simple Card Title Two',
  description: 'This is a sample card description. This is fun!',
  display: true,
  url: '/projects/1/transcripts/5678'
} ];

const transcriptItems = [ {
  id: '1234',
  key: 'transcript_key_1',
  title: 'Title - Done Transcript',
  description: 'This transcript has finished processing.',
  subtitle: 'This transcript has finished processing.',
  url: '/projects/1/transcripts/',
  status: 'done',
  display: true
}, {
  id: '5645',
  key: 'transcript_key_2',
  title: 'Title - In Progress Transcript',
  description: 'This transcript is still being generated.',
  subtitle: 'This transcript is still being generated.',
  url: '/projects/1/transcripts/',
  status: 'in-progress',
  display: true
}, {
  id: '2456',
  key: 'transcript_key_3',
  title: 'Title - Error Transcript',
  description: 'Transcript generation failed for this card.',
  subtitle: 'Transcript generation failed for this card.',
  url: '/projects/1/transcripts/',
  status: 'error',
  errorMessage: 'Something has gone wrong with your transcription',
  display: true
} ];

storiesOf('Search Bar', module)
  .addDecorator(StoryRouter())
  .add('Default', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <SearchBar
          handleSearch={ searchActions.handleSearch }
        />
      </section>
    );
  })
  .add('Projects Search', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <SearchBar
          handleSearch={ searchActions.handleSearch }
        />
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
        <SearchBar
          handleSearch={ searchActions.handleSearch }
        />
        <List
          items={ transcriptItems }
          handleEditItem={ cardActions.handleEditItem }
          handleDeleteItem={ cardActions.handleDeleteItem }
        />
      </section>
    );
  });
