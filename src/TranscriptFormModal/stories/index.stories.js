import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import TranscriptFormModal from '../index.js';
import { modalItems } from '../../dummy';

storiesOf('Transcript Form Modal', module)
  .addDecorator(StoryRouter())
  .add('New Transcript', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <TranscriptFormModal
          handleSaveForm={ action('Form saved') }
          handleOnHide={ action('Close modal') }
          { ...modalItems[2] }
        />
      </section>
    );
  })
  .add('Not shown Transcript Modal', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <TranscriptFormModal
          handleSaveForm={ action('Form saved') }
          handleOnHide={ action('Close modal') }
          { ...modalItems[3] }
        />
      </section>
    );
  });
