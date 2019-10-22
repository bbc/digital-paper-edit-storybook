import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ProgrammeScriptEditor from '../index.js';
import PreviewCanvas from '../../PreviewCanvas';

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

const playlist = [
  { type:'video', start:0, sourceStart: 30, duration:10, src:'https://download.ted.com/talks/MorganVague_2018X.mp4' },
  { type:'video', start:10, sourceStart: 40, duration:10, src:'https://download.ted.com/talks/IvanPoupyrev_2019.mp4' },
  { type:'video', start:20, sourceStart: 50, duration:10, src:'https://download.ted.com/talks/KateDarling_2018S-950k.mp4' },

];

storiesOf('ProgrammeScriptEditor (not published)', module)
  .add('Default', () =>
    <ProgrammeScriptEditor
      title={ 'title' }
      playlist={ playlist }
      items={ items }
      handleDelete={ handleDeleteActions }
      handleEdit={ handleEditActions }
      handleReorder={ handleReorderActions }
    />
  );
