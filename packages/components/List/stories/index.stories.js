import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import List from '../index.js';
import SearchBar from '../../SearchBar';

export const items = [{
    id: '1234',
    key: 'abc123',
    title: 'Sample Simple Card Title One',
    description: 'This is a sample card description. This is fun!',
    display: true,
}, {
    id: '5678',
    key: 'def456',
    title: 'Sample Simple Card Title Two',
    description: 'This is a sample card description. This is fun!',
    display: true,
}];

const listEventNames = actions('handleEdit', 'handleDelete', 'showLink', 'handleSearch');

storiesOf('List', module)
    .addDecorator(StoryRouter())
    .add('default', () => {
        return (
            <List
                items={items}
                {...listEventNames}
            />
        )
    });