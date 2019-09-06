import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import ProgrammeScriptContainer from '../../ProgrammeScriptContainer/';

export const handleReorderActions = actions({ handleReorder: 'Handle reorder' });
export const handleDeleteActions = actions({ handleDelete: 'Handle delete' });
export const handleEditActions = actions({ handleEdit: 'Handle edit' });

export const items = [

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