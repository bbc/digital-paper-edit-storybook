import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import ProgrammeScriptContainer from '../../ProgrammeScriptContainer/';

export const handleReorderActions = actions({ handleReorder: 'Handle reorder' });
export const handleDeleteActions = actions({ handleDelete: 'Handle delete' });
export const handleEditActions = actions({ handleEdit: 'Handle edit' });

export const items = [
  {
    id: '1234',
    start: '',
    end: 'abc123',
    text: 'Sample Simple Card Title One',
    type: 'This is a sample card description. This is fun!',
  },
  { ...item,
    id: '5678',
    key: 'def456',
    title: 'Sample Simple Card Title Two',
    description: 'This is a sample card description. This is fun!',
    display: true,
    url: '/projects/1/transcripts/5678'
  }
];

storiesOf('ProgrammeScript', module)
  .add('Default', () =>
    <ProgrammeScriptContainer
      elements={ items }
      handleReorder={ handleReorderActions }
      handleDelete={ handleDeleteActions }
      handleEdit={ handleEditActions }
    />
  );