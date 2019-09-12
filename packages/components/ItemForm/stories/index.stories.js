import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import ItemForm from '../index.js';
import { modalActions, modalItems } from '../../FormModal/stories/index.stories.js';

storiesOf('Item Form', module)
  .addDecorator(StoryRouter())
  .add('Edit Project', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <ItemForm
          { ...modalActions }
          { ...modalItems[0] }
        />
      </section>
    );
  });