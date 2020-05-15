import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import ItemFormModal from '../index.js';
import { modalItems } from '../../dummy';

storiesOf('Item Form Modal', module)
  .addDecorator(StoryRouter())
  .add('Edit project', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <ItemFormModal
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
        <ItemFormModal
          handleSaveForm={ action('Form saved') }
          handleOnHide={ action('Close modal') }
          { ...modalItems[1] }
        />
      </section>
    );
  });
