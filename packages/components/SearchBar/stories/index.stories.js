import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import SearchBar from '../index.js';

export const searchActions = actions({handleSearch: 'Handle search'});

// export const cardActions = actions({ handleEdit: 'Edit button clicked', handleDelete: 'Delete button clicked', showLinkPath: 'Card clicked' });

storiesOf('Search Bar', module)
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
