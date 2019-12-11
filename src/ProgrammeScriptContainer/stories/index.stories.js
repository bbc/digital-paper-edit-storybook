import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ProgrammeScriptContainer from '../index.js';
import { programmeScript } from '../../dummy';

export const handleReorderActions = action('Handle reorder');
export const handleDeleteActions = action('Handle delete');
export const handleEditActions = action('Handle edit');

const items = programmeScript;

storiesOf('ProgrammeScript', module).add('Default', () => (
  <ProgrammeScriptContainer
    items={ items }
    handleDelete={ handleDeleteActions }
    handleEdit={ handleEditActions }
    handleReorder={ handleReorderActions }
  />
));
