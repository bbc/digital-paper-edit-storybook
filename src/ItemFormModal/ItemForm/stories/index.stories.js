import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import ItemForm from '../index.js';
import { actions } from '@storybook/addon-actions';
import { modalItems } from '../../../dummy';

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
