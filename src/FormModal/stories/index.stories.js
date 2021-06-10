import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import FormModal from '../index.js';
import { modalItems } from '../../dummy';

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
  .add('New programme script', () => {
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
