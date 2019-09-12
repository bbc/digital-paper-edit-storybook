import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import TranscriptForm from '../index.js';

import { modalActions } from '../../FormModal/stories/index.stories.js';

const transcriptFormProps = {
  projectId: 123,
  title: 'Sample Transcript Title',
  description: 'Sample Transcript Description',
  id: 456,
  uploadCompleted: true
};

storiesOf('Transcript Form', module)
  .addDecorator(StoryRouter())
  .add('Default', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <TranscriptForm
          { ...modalActions }
          { ...transcriptFormProps }
        />
      </section>
    );
  });
