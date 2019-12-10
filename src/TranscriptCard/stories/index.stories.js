import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import TranscriptCard from '../index.js';
import { withKnobs, number } from '@storybook/addon-knobs';

const transcriptItems = [
  {
    id: '1',
    key: 'transcript_key_1',
    title: 'Title - Done Transcript',
    description: 'Description 1.',
    url: '/projects/1/transcripts/',
    status: 'done',
    display: true
  },
  {
    id: '2',
    key: 'transcript_key_2',
    title: 'Title - In Progress Transcript',
    description: 'This transcript is still being generated.',
    url: '/projects/1/transcripts/',
    status: 'in-progress',
    display: true
  },
  {
    id: '3',
    key: 'transcript_key_3',
    title: 'Title - Error Transcript',
    description: 'Transcript generation failed for this card.',
    url: '/projects/1/transcripts/',
    status: 'error',
    errorMessage: 'Something has gone wrong with your transcription',
    display: true
  },
  {
    id: '4',
    key: 'transcript_key_4',
    title: 'Title - Uploading Transcript',
    description: 'This transcript is still being generated.',
    errorMessage: 'Please keep this page open until the file is uploaded.',
    url: '/projects/1/transcripts/',
    status: 'uploading',
    display: true
  }
];

const transcriptCardActions = actions({
  handleEdit: 'Edit button clicked',
  handleDelete: 'Delete button clicked'
});

const style = { height: '90vh', overflow: 'scroll' };

storiesOf('Transcript Card', module)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Success', () => {
    return (
      <section style={ style }>
        <TranscriptCard
          { ...transcriptItems[0] }
          handleEditItem={ transcriptCardActions.handleEdit }
          handleDeleteItem={ transcriptCardActions.handleDelete }
        />
      </section>
    );
  })
  .add('In Progress', () => {
    return (
      <section style={ style }>
        <TranscriptCard
          { ...transcriptItems[1] }
          handleEditItem={ transcriptCardActions.handleEdit }
          handleDeleteItem={ transcriptCardActions.handleDelete }
        />
      </section>
    );
  })
  .add('Uploading', () => {
    const defaultProgress = 32;

    return (
      <section style={ style }>
        <TranscriptCard
          { ...transcriptItems[3] }
          handleEditItem={ transcriptCardActions.handleEdit }
          handleDeleteItem={ transcriptCardActions.handleDelete }
          progress={ number('progress', defaultProgress) }
        />
      </section>
    );
  })
  .add('Failed', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <TranscriptCard
          { ...transcriptItems[2] }
          handleEditItem={ transcriptCardActions.handleEdit }
          handleDeleteItem={ transcriptCardActions.handleDelete }
        />
      </section>
    );
  });
