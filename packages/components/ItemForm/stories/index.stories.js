import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import ItemForm from '../index.js';
import { actions } from '@storybook/addon-actions';

const modalItems = [ {
  id: '1',
  type: 'project',
  showModal: true,
  title: 'Example Project Title',
  description: 'This is a sample card description. This is fun!',
  url: '/projects/1/transcripts/1234',
  modalTitle: 'Edit Project',
}, {
  showModal: true,
  modalTitle: 'New Project',
  id: '2'
}, {
  projectId: '123',
  title: '',
  description: '',
  uploadCompleted: true,
  showModal: true,
  modalTitle: 'New Transcript',
  id: '3',
  type: 'transcript'
} ];

const modalActions = actions({ handleSaveForm: 'Form saved' });

storiesOf('Item Form', module)
  .addDecorator(StoryRouter())
  .add('Edit Project', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <ItemForm
          handleSaveForm={ modalActions.handleSaveForm }
          { ...modalItems[0] }
        />
      </section>
    );
  });