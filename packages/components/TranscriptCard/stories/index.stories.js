import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import TranscriptCard from '../index.js';

export const transcriptItems = [ {
  id: '1',
  key: 'transcript_key_1',
  title: 'Title - Done Transcript',
  description: 'This transcript has finished processing.',
  subtitle: 'This transcript has finished processing.',
  url: '/projects/1/transcripts/',
  status: 'done',
  display: true
}, {
  id: '2',
  key: 'transcript_key_2',
  title: 'Title - In Progress Transcript',
  description: 'This transcript is still being generated.',
  subtitle: 'This transcript is still being generated.',
  url: '/projects/1/transcripts/',
  status: 'in-progress',
  display: true
}, {
  id: '1234',
  key: 'transcript_key_3',
  title: 'Title - Error Transcript',
  description: 'Transcript generation failed for this card.',
  subtitle: 'Transcript generation failed for this card.',
  url: '/projects/1/transcripts/',
  status: 'error',
  errorMessage: 'Something has gone wrong with your transcription',
  display: true
} ];

export const transcriptCardActions = actions({ handleEdit: 'Edit button clicked', handleDelete: 'Delete button clicked' });

storiesOf('Transcript Card', module)
  .addDecorator(StoryRouter())
  .add('Success', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <TranscriptCard
          transcriptItem={ transcriptItems[0] }
          handleEdit={ transcriptCardActions.handleEdit }
          handleDelete={ transcriptCardActions.handleDelete }
        />
      </section>
    );
  })
  .add('In Progress', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <TranscriptCard
          transcriptItem={ transcriptItems[1] }
          handleEdit={ transcriptCardActions.handleEdit }
          handleDelete={ transcriptCardActions.handleDelete }
        />
      </section>
    );
  })
  .add('Failed', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <TranscriptCard
          transcriptItem={ transcriptItems[2] }
          handleEdit={ transcriptCardActions.handleEdit }
          handleDelete={ transcriptCardActions.handleDelete }
        />
      </section>
    );
  });
