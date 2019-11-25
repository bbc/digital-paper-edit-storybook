import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import TranscriptForm from '../index.js';
import { actions } from '@storybook/addon-actions';

const modalActions = actions({ handleSaveForm: 'Form saved' });

const transcriptFormProps = {
  projectId: '123',
  title: 'Sample Transcript Title',
  description: 'Sample Transcript Description',
  id: '456',
  uploadCompleted: true
};

storiesOf('Transcript Form', module)
  .addDecorator(StoryRouter())
  .add('Default', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <TranscriptForm
          handleSaveForm={ modalActions.handleSaveForm }
          { ...transcriptFormProps }
        />
      </section>
    );
  });
