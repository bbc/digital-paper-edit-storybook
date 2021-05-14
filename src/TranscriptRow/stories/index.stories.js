import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import TranscriptRow from '../index.js';
import { withKnobs, number } from '@storybook/addon-knobs';
import { transcriptItems } from '../../dummy';

const transcriptCardActions = actions({
  handleEdit: 'Edit button clicked',
  handleDelete: 'Delete button clicked',
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
          created={ '2021-05-14' }
          mediaDuration={ '30 mins' }
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
          mediaDuration={ '30 mins' }
          created={ '2021-05-14' }
        />
      </section>
    );
  })
  .add('In Progress', () => {
    return (
      <section style={ style }>
        <TranscriptRow
          { ...transcriptItems[1] }
          created={ '2021-05-14' }
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
          message="Stripping audio..."
          handleEditItem={ transcriptCardActions.handleEdit }
          handleDeleteItem={ transcriptCardActions.handleDelete }
          created={ '2021-05-14' }

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
          created={ '2021-05-14' }
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
          created={ '2021-05-14' }
        />
      </section>
    );
  });
