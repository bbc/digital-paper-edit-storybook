import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import FormModal from '../index.js';

// modalTitle = { this.state.itemId ? 'Edit Paper Edit' : 'New Paper Edit' }
// show = { this.state.isNewItemModalShow }

export const modalItems = [ {
  id: '1',
  isNewItemModalShow: true,
  title: 'Example Transcript Title',
  description: 'This is a sample card description. This is fun!',
  url: '/projects/1/transcripts/1234',
  modalTitle: 'Edit Paper Edit'
}, {
  id: '2',
  isNewItemModalShow: true,
  title: 'Example Transcript Title',
  description: 'This is a sample card description. This is fun!',
  url: '/projects/1/transcripts/1234',
  modalTitle: 'New Paper Edit'

} ];

export const modalActions = actions({ handleSaveForm: 'Form saved' });

storiesOf('Form Modal', module)
  .addDecorator(StoryRouter())
  .add('Edit Project', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <FormModal
          modalActions = { modalActions }
          modalItem = { modalItems[0] }
        />
      </section>
    );
  })
  .add('New Paper Edit Project', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <FormModal
          modalActions={ modalActions }
          modalItem={ modalItems[1] }
        />
      </section>
    );
  });
