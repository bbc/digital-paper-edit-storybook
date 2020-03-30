import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ProgrammeScriptEditor from '../index.js';
import { programmeScript } from '../../dummy';
export const handleReorderActions = action('Handle reorder');
export const handleDeleteActions = action('Handle delete');
export const handleEditActions = action('Handle edit');

const items = programmeScript;

const playlist = [
  {
    type: 'video',
    start: 0,
    sourceStart: 30,
    duration: 10,
    src: 'https://download.ted.com/talks/MorganVague_2018X.mp4'
  },
  {
    type: 'video',
    start: 10,
    sourceStart: 40,
    duration: 10,
    src: 'https://download.ted.com/talks/IvanPoupyrev_2019.mp4'
  },
  {
    type: 'video',
    start: 20,
    sourceStart: 50,
    duration: 10,
    src: 'https://download.ted.com/talks/KateDarling_2018S-950k.mp4'
  }
];

storiesOf('ProgrammeScriptEditor (not published)', module).add(
  'Default',
  () => (
    <ProgrammeScriptEditor
      title={ 'title' }
      playlist={ playlist }
      items={ items }
      handleDelete={ handleDeleteActions }
      handleEdit={ handleEditActions }
      handleReorder={ handleReorderActions }
    />
  )
);
