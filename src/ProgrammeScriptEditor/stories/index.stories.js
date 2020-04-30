import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ProgrammeScriptEditor from '../index.js';
import { programmeScript } from '../../dummy';
export const handleReorderActions = action('Handle reorder');
export const handleDeleteActions = action('Handle delete');
export const handleEditActions = action('Handle edit');
export const handleDoubleClickActions = action('Handle double-click');

const playlist = [
  {
    type: 'video',
    start: 0,
    sourceStart: 30,
    duration: 10,
    src: 'https://download.ted.com/talks/MorganVague_2018X.mp4'
  }
];

storiesOf('ProgrammeScriptEditor (not published)', module).add(
  'Default',
  () => (
    <ProgrammeScriptEditor
      title={ 'title' }
      playlist={ playlist }
      items={ programmeScript }
      handleDelete={ handleDeleteActions }
      handleEdit={ handleEditActions }
      handleReorder={ handleReorderActions }
      handleDoubleClick={ handleDoubleClickActions }
    />
  )
);
