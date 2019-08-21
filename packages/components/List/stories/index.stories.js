import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import List from '../index.js';

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

export const actions = {
    handleEdit: action('handleEdit'),
    handleDelete: action('handleDelete'),
    showLinkPath: action('showLinkPath')
};

storiesOf('List', module)
    .addDecorator(StoryRouter())
    .add('default', () => {
        return (
            <List
                items={items}
                handleEdit={actions.handleEdit}
                handleDelete={actions.handleDelete}
                showLinkPath={actions.showLinkPath}
            />
        )
    });