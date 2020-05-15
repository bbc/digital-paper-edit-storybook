import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import ExportForm from '../index.js';
import { actions } from '@storybook/addon-actions';
import { modalItems } from '../../../dummy';

const modalActions = actions({ handleSaveForm: 'Form saved' });

storiesOf('Export Form', module)
  .addDecorator(StoryRouter())
  .add('Export', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <ExportForm
          handleSaveForm={ modalActions.handleSaveForm }
          { ...modalItems[0] }
        />
      </section>
    );
  });
