import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import TranscriptRow from '../index.js';
import { withKnobs, number } from '@storybook/addon-knobs';
import { transcriptItems } from '../../dummy';

const transcriptCardActions = actions({
  handleEdit: 'Edit button clicked',
  handleDelete: 'Delete button clicked'
});

const style = { height: '90vh', overflow: 'scroll' };

storiesOf('Transcript Row', module)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Success', () => {
    return (
      <section style={ style }>
        <TranscriptRow
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
        <TranscriptRow
          { ...transcriptItems[0] }
          handleEditItem={ transcriptCardActions.handleEdit }
          handleDeleteItem={ transcriptCardActions.handleDelete }
          mediaDuration={ 10000 }
          created={ '20.04.21, 12:53' }
        />
      </section>
    );
  })
  .add('In Progress', () => {
    return (
      <section style={ style }>
        <TranscriptRow
          { ...transcriptItems[1] }
          handleEditItem={ transcriptCardActions.handleEdit }
          handleDeleteItem={ transcriptCardActions.handleDelete }
        />
      </section>
    );
  }).add('In Progress with message', () => {
    return (
      <section style={ style }>
        <TranscriptRow
          { ...transcriptItems[1] }
          message="Fixing up a Martini..."
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
        <TranscriptRow
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
        <TranscriptRow
          { ...transcriptItems[2] }
          handleEditItem={ transcriptCardActions.handleEdit }
          handleDeleteItem={ transcriptCardActions.handleDelete }
        />
      </section>
    );
  });
