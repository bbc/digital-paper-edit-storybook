import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Breadcrumb from '../index.js';

export const breadcrumbItems = {
  projects: [ {
    name: 'Projects',
    link: '/projects',
  }, {
    name: 'Example project name'
  } ],
  paperEdits: [ {
    name: 'Projects',
    link: '/projects'
  }, {
    name: 'Project: The Sample',
    link: '/projects/the-sample'
  }, {
    name: 'PaperEdits',
  }, {
    name: 'Example programme title'
  } ]
};

storiesOf('Breadcrumb', module)
  .addDecorator(StoryRouter())
  .add('Projects', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <Breadcrumb
          items = { breadcrumbItems.projects }
        />
      </section>
    );
  })
  .add('Paper Edits', () => {
    return (
      <section style={ { height: '90vh', overflow: 'scroll' } }>
        <Breadcrumb
          items={ breadcrumbItems.paperEdits }
        />
      </section>

    );
  });
