import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import List from '../index.js';

import { item, cardActions } from '../../SimpleCard/stories/index.stories.js';
import { searchActions } from '../../SearchBar/stories/index.stories.js';

export const items = [{
    ...item,
    id: '1234',
    key: 'abc123',
    title: 'Sample Simple Card Title One',
    description: 'This is a sample card description. This is fun!',
    display: true,
}, {...item,
    id: '5678',
    key: 'def456',
    title: 'Sample Simple Card Title Two',
    description: 'This is a sample card description. This is fun!',
    display: true,
    url: 'projects/1/transcripts/'
}];

storiesOf('List', module)
    .addDecorator(StoryRouter())
    .add('default', () => 
            <List
                items={items}
                {...cardActions}
                {...searchActions}
            />
        );