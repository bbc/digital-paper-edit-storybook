import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import List from '../index.js';
import SearchBar from '../../SearchBar';

import { item, cardActions } from '../../SimpleCard/stories/index.stories.js';

export const searchActions = actions({ handleSearch: 'Handle search' });

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
    url: '/projects/1/transcripts/5678'
}];

storiesOf('List', module)
    .addDecorator(StoryRouter())
    .add('With Simple Cards', () => 
            <List
                projectItems={items}
                {...cardActions}
                {...searchActions}
            />
        );

storiesOf('List/Search Bar', module)
    .addDecorator(StoryRouter())
    .add('Default', () => {
        return (
            <section style={{ height: '75vh', overflow: 'scroll' }}>
                <SearchBar
                    {...searchActions}
                />
            </section>
        );
    });