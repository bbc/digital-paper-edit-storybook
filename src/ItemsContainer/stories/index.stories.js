import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import ItemsContainer from '..';
import { items, transcriptItems } from '../../dummy';
import { withKnobs, object } from '@storybook/addon-knobs';

storiesOf('ItemsContainer - Demo only (not published on NPM)', module)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Project View', () => {
    const pItems = [ object('item 1', items[0]), object('item 2', items[1]) ];

    return (
      <ItemsContainer
        items={ pItems }
        model="Project"
        handleSave={ action('handleSave') }
        handleDelete={ action('handleDelete') }
      />
    );
  })
  .add('Transcripts View', () => {
    const tItems = [
      object('item 1', transcriptItems[0]),
      object('item 2', transcriptItems[1]),
      object('item 3', transcriptItems[2]),
      object('item 4', transcriptItems[3])
    ];

    return (
      <ItemsContainer
        items={ tItems }
        type="Transcript"
        handleSave={ action('handleSave') }
        handleDelete={ action('handleDelete') }
      />
    );
  });
