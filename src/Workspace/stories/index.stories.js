import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import Workspace from '..';

import { items, transcriptItems } from '../../dummy';

const paperEditItems = items;

storiesOf('Workspace - Demo only (not published on NPM)', module)
  .addDecorator(StoryRouter())
  .add('Tabular View', () => {
    return (
      <Workspace
        id={ '1' }
        mode="tab"
        transcripts={ transcriptItems }
        paperEdits={ paperEditItems }
        name="Project"
        handleSaveTranscript={ action('handleSaveTranscript') }
        handleDeleteTranscript={ action('handleDeleteTranscript') }
        handleSavePaperEdit={ action('handleSavePaperEdit') }
        handleDeletePaperEdit={ action('handleDeletePaperEdit') }
      />
    );
  })
  .add('Split View', () => {
    return (
      <Workspace
        id={ '1' }
        mode="split"
        transcripts={ transcriptItems }
        paperEdits={ paperEditItems }
        name="Project Title"
        handleSearch={ action('handleSearch') }
        toggleShowModal={ action('handleToggle') }
        handleSaveTranscript={ action('handleSaveTranscript') }
        handleDeleteTranscript={ action('handleDeleteTranscript') }
        handleSavePaperEdit={ action('handleSavePaperEdit') }
        handleDeletePaperEdit={ action('handleDeletePaperEdit') }
      />
    );
  });
