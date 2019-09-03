import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import CustomAlert from '../CustomAlert/index.js';
import TranscriptForm from '../index.js';

export const alertProps = {
  variant: 'danger',
  heading: 'Error could not contact the server',
  message: 'There was an error trying to create this transcript on the server',
  show: true
};

export const transcriptFormProps = {
  projectId: 123,
  title: 'Sample Transcript Title',
  description: 'Sample Transcript Description',
  id: 456
};

export const transcriptFormActions = actions(
  {
    handleSaveForm: 'Form saved',
    handleCloseModal: 'Modal closed',
    handleSubmitForm: 'Form submitted' }
);

storiesOf('Transcript Form / Custom Alert', module)
  .addDecorator(StoryRouter())
  .add('Transcript Error', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <CustomAlert
          props={ alertProps }
        />
      </section>
    );
  });

storiesOf('Transcript Form', module)
  .addDecorator(StoryRouter())
  .add('Default', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <TranscriptForm
          { ...transcriptFormActions }
          { ...transcriptFormProps }
        />
      </section>
    );
  });
