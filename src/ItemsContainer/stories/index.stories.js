import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import ItemsContainer from '..';
import { withKnobs, object } from '@storybook/addon-knobs';

storiesOf('ItemsContainer - Demo only (not published on NPM)', module)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Project View', () => {
    const projectItems = [
      object('item 1', {
        id: '1234',
        key: 'abc123',
        title: 'Sample Simple Card Title One',
        description: 'This is a sample card description. This is fun!',
        url: '/projects/1/transcripts/5678',
        display: true
      }),
      object('item 2', {
        id: '5678',
        key: 'def456',
        title: 'Sample Simple Card Title Two',
        description: 'This is a sample card description. This is fun!',
        display: true,
        url: '/projects/1/transcripts/5678'
      })
    ];

    return (
      <ItemsContainer
        items={ projectItems }
        model="Project"
        handleSave={ action('handleSave') }
        handleDelete={ action('handleDelete') }
      />
    );
  })
  .add('Transcripts View', () => {
    const transcriptItems = [
      object('item 1', {
        id: '1',
        projectId: 'p1',
        key: 'transcript_key_1',
        title: 'Title - Done Transcript',
        description: 'This transcript has finished processing.',
        url: '/projects/1/transcripts/',
        status: 'done',
        display: true
      }),
      object('item 2', {
        id: '2',
        projectId: 'p1',
        key: 'transcript_key_2',
        title: 'Title - In Progress Transcript',
        description: 'This transcript is still being generated.',
        url: '/projects/1/transcripts/',
        status: 'in-progress',
        display: true
      }),
      object('item 3', {
        id: '3',
        projectId: 'p1',
        key: 'transcript_key_3',
        title: 'Title - Error Transcript',
        description: 'Transcript generation failed for this card.',
        url: '/projects/1/transcripts/',
        status: 'error',
        errorMessage: 'Something has gone wrong with your transcription',
        display: true
      }),
      object('item 4', {
        id: '4',
        key: 'transcript_key_4',
        title: 'Title - Uploading Transcript',
        description: 'This transcript is still being generated.',
        errorMessage: 'Please keep this page open until the file is uploaded.',
        url: '/projects/1/transcripts/',
        status: 'uploading',
        display: true,
        progress: 30
      })
    ];

    return (
      <ItemsContainer
        items={ transcriptItems }
        model="Transcript"
        handleSave={ action('handleSave') }
        handleDelete={ action('handleDelete') }
      />
    );
  });
