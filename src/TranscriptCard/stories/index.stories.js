import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import TranscriptCard from '../index.js';
import { withKnobs, number } from '@storybook/addon-knobs';
import { transcriptItems } from '../../dummy';

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
  .add('Success with time', () => {
    return (
      <section style={ style }>
        <TranscriptCard
          { ...transcriptItems[0] }
          handleEditItem={ transcriptCardActions.handleEdit }
          handleDeleteItem={ transcriptCardActions.handleDelete }
          mediaDuration={ 10000 }
          transcriptionDuration={ 1000000 }
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
  }).add('In Progress with message', () => {
    return (
      <section style={ style }>
        <TranscriptCard
          { ...transcriptItems[1] }
          message="Stripping audio..."
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
