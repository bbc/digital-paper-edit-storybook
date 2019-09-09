import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ProgrammeScriptContainer from '../index.js';
import ProgrammeElements from '../ProgrammeElements';

export const handleReorderActions = action('Handle reorder');
export const handleDeleteActions = action('Handle delete');
export const handleEditActions = action('Handle edit');

const items = [
  {
    type: 'paper-cut',
    id: 1,
    speaker: 'loud',
    words: [ { text:'sdf', start: 0, end: 1 } ]
  },
  {
    type: 'paper-cut',
    id: 2,
    speaker: 'loud',
    words: [ { text:'sdf', start: 0, end: 1 } ]
  },
  {
    type: 'title',
    text: 'WOW'
  },
  {
    type: 'voice-over',
    text: 'insert VO'
  },
  {
    type: 'note',
    text: 'note'
  },
  {
    type: 'insert',
    text: 'omg'
  }
];

export const elements = ProgrammeElements(items, handleEditActions, handleDeleteActions);
console.log(elements);

storiesOf('ProgrammeScript', module)
  .add('Default', () =>
    <ProgrammeScriptContainer
      elements={ elements }
      handleDelete={ handleDeleteActions }
      handleEdit={ handleEditActions }
      handleReorder={ handleReorderActions }
    />
  );