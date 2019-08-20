import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'bootstrap-css-only/css/bootstrap.css';
import SimpleCard from '../index.js';

export const item = {
    id: '1234',
    key: 'abc123',
    title: 'Sample Simple Card Title',
    description: 'This is a sample card description. This is fun!'
};

export const actions = {
    handleEdit: action('handleEdit'),
    handleDelete: action('handleDelete'),
    showLinkPath: action('showLinkPath')
};

storiesOf('Simple Card', module)
    .add('default', () => {
        return (
            <SimpleCard
                key={item.key}
                id={item.id}
                title={item.title}
                description={item.description}
                handleEdit={actions.handleEdit}
                handleDelete={actions.handleDelete}
                showLinkPath={actions.showLinkPath}
            />
        )
    })