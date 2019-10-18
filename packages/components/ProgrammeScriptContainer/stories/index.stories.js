import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SortableInsertContainer from '../SortableInsertContainer';
import OptimoStyleContainer from '../OptimoStyleContainer';
import OptimoStyleElement from '../OptimoStyleElement';

export const handleReorderActions = action('Handle reorder');
export const handleDeleteActions = action('Handle delete');
export const handleEditActions = action('Handle edit');

const items = [
  {
    type: 'title',
    text: 'An immense Achievement'
  },
  {
    type: 'paper-cut',
    id: 1,
    speaker: 'Mr Loud',
    words: [ { text:'Greatest day of my life was when I wrote this text.', start: 0, end: 1 } ]
  },
  {
    type: 'note',
    text: 'Maybe a little bit obnoxious'
  },
  {
    type: 'insert',
    text: 'Insert New Selection here'
  },
  {
    type: 'paper-cut',
    id: 2,
    speaker: 'Mrs Loud',
    words: [ { text:'Greatest day of my life was when I spoke this text.', start: 0, end: 1 } ]
  },
  {
    type: 'voice-over',
    text: 'link: wonderful times of the Loud family'
  },
];

storiesOf('ProgrammeScriptContainer', module)
  .add('Default', () =>
    <SortableInsertContainer
      items={ items }
      handleDelete={ handleDeleteActions }
      handleEdit={ handleEditActions }
      handleReorder={ handleReorderActions }
    />
  )
  .add('Optimo Style Container', () =>
    <OptimoStyleContainer
      items={ items }
      handleDelete={ handleDeleteActions }
      handleEdit={ handleEditActions }
      handleReorder={ handleReorderActions }
    />
  );