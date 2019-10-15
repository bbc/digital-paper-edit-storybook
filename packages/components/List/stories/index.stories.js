import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import List from '../index.js';

const cardActions = actions({
  handleEditItem: 'Edit button clicked',
  handleDeleteItem: 'Delete button clicked'
});

const items = [ {
  id: '1234',
  key: 'abc123',
  title: 'Sample Simple Card Title One',
  description: 'This is a sample card description. This is fun!',
  url: '/projects/1/transcripts/1234',
  display: true,
}, {
  id: '5678',
  key: 'def456',
  title: 'Sample Simple Card Title Two',
  description: 'This is a sample card description. This is fun!',
  display: true,
  url: '/projects/1/transcripts/5678'
} ];

const transcriptItems = [ {
  id: '1',
  key: 'transcript_key_1',
  title: 'Title - Done Transcript',
  description: 'This transcript has finished processing.',
  subtitle: 'This transcript has finished processing.',
  url: '/projects/1/transcripts/',
  status: 'done',
  display: true
}, {
  id: '3',
  key: 'transcript_key_2',
  title: 'Title - In Progress Transcript',
  description: 'This transcript is still being generated.',
  subtitle: 'This transcript is still being generated.',
  url: '/projects/1/transcripts/',
  status: 'in-progress',
  display: true
}, {
  id: '4',
  key: 'transcript_key_3',
  title: 'Title - Error Transcript',
  description: 'Transcript generation failed for this card.',
  subtitle: 'Transcript generation failed for this card.',
  url: '/projects/1/transcripts/',
  status: 'error',
  errorMessage: 'Something has gone wrong with your transcription',
  display: true
} ];

const transItems = transcriptItems;

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
  .add('Transcript Cards', () =>
    <section style={ { height: '100%', overflow: 'scroll' } }>
      <List
        items={ transItems }
        handleEditItem={ cardActions.handleEditItem }
        handleDeleteItem={ cardActions.handleDeleteItem }
      />
    </section>
  );