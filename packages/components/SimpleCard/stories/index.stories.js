import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import SimpleCard from '../index.js';

export const item = {
    id: '1234',
    key: 'abc123',
    title: 'Sample Simple Card Title',
    description: 'This is a sample card description. This is fun!',
};

const eventNames = actions('handleEdit', 'handleDelete', 'showLink');

const eventsFromObject = actions({ handleEdit: 'edited', handleDelete: 'deleted', showLink: `/${item.id}` });

storiesOf('Simple Card', module)
    .addDecorator(StoryRouter())
    .add('default', () => {
        return (
            <section style={{ height: '75vh', overflow: 'scroll' }}>
                <SimpleCard
                    key={item.key}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    {...eventsFromObject}
                />
            </section>
        )
    })
    // .add('test', () => {
    //     return (
    //         <section style={{ height: '75vh', overflow: 'scroll' }}>
    //             <SimpleCard
    //                 key={item.key}
    //                 id={item.id}
    //                 title={item.title}
    //                 description={item.description}
    //                 {...eventsFromObject}
    //             />
    //         </section>
    //     )
    // });