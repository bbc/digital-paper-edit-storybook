import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import Workspace from '..';

const paperEditItems = [ {
  id: '1234',
  projectId: '5678',
  key: 'abc123',
  title: 'Sample Simple Card Title One',
  description: 'This is a sample card description. This is fun!',
  display: true,
  url: '/projects/1/transcripts/1234'
}, {
  id: '5678',
  projectId: '5678',
  key: 'def456',
  title: 'Sample Simple Card Title Two',
  description: 'This is a sample card description. This is fun!',
  display: true,
  url: '/projects/1/transcripts/5678'
} ];

const transcriptItems = [ {
  id: '1',
  projectId: '5678',
  key: 'transcript_key_1',
  title: 'Title - Done Transcript',
  description: 'This transcript has finished processing.',
  subtitle: 'This transcript has finished processing.',
  url: '/projects/1/transcripts/',
  status: 'done',
  display: true
}, {
  id: '2',
  projectId: '5678',
  key: 'transcript_key_2',
  title: 'Title - In Progress Transcript',
  description: 'This transcript is still being generated.',
  subtitle: 'This transcript is still being generated.',
  url: '/projects/1/transcripts/',
  status: 'in-progress',
  display: true
}, {
  id: '3',
  projectId: '5678',
  key: 'transcript_key_3',
  title: 'Title - Error Transcript',
  description: 'Transcript generation failed for this card.',
  subtitle: 'Transcript generation failed for this card.',
  url: '/projects/1/transcripts/',
  status: 'error',
  errorMessage: 'Something has gone wrong with your transcription',
  display: true
} ];

storiesOf('Workspace - Demo only (not published on NPM)', module)
  .addDecorator(StoryRouter())
  .add('Tabular View', () => {
    return (
      <Workspace
        id={ '1' }
        mode="tab"
        transcripts={ transcriptItems }
        paperEdits={ paperEditItems }
        name="Project"
        handleSaveTranscript={ action('handleSaveTranscript') }
        handleDeleteTranscript={ action('handleDeleteTranscript') }
        handleSavePaperEdit={ action('handleSavePaperEdit') }
        handleDeletePaperEdit={ action('handleDeletePaperEdit') }
      />
    );
  }).add('Split View', () => {
    return (
      <Workspace
        id={ '1' }
        mode="split"
        transcripts={ transcriptItems }
        paperEdits={ paperEditItems }
        name="Project"
        handleSearch={ action('handleSearch') }
        toggleShowModal={ action('handleToggle') }
        handleSaveTranscript={ action('handleSaveTranscript') }
        handleDeleteTranscript={ action('handleDeleteTranscript') }
        handleSavePaperEdit={ action('handleSavePaperEdit') }
        handleDeletePaperEdit={ action('handleDeletePaperEdit') }
      />
    );
  });
