import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import FormModal from '../index.js';

const modalItems = [
  {
    id: '1',
    type: 'Project',
    showModal: true,
    title: 'Example Project Title',
    description: 'This is a sample card description. This is fun!',
    url: '/projects/1/transcripts/1234',
    modalTitle: 'Edit Project',
  },
  {
    showModal: true,
    modalTitle: 'New Project',
    id: '2',
    type: 'Project'
  },
  {
    projectId: '123',
    title: '',
    description: '',
    uploadCompleted: true,
    showModal: true,
    modalTitle: 'New Transcript',
    id: '3',
    type: 'Transcript'
  },
  {
    projectId: '1234',
    title: '',
    description: '',
    uploadCompleted: true,
    showModal: false,
    modalTitle: 'New Transcript',
    id: '4',
    type: 'Transcript'
  }
];

storiesOf('Form Modal', module)
  .addDecorator(StoryRouter())
  .add('Edit project', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <FormModal
          handleSaveForm={ action('Form saved') }
          handleOnHide={ action('Close modal') }
          { ...modalItems[0] }
        />
      </section>
    );
  })
  .add('New project', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <FormModal
          handleSaveForm={ action('Form saved') }
          handleOnHide={ action('Close modal') }
          { ...modalItems[1] }
        />
      </section>
    );
  })
  .add('New Transcript', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <FormModal
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
        <FormModal
          handleSaveForm={ action('Form saved') }
          handleOnHide={ action('Close modal') }
          { ...modalItems[3] }
        />
      </section>
    );
  });
