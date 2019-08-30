import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import TranscriptCard from '../index.js';

export const transcriptItems = {
    done : {
        id: '1234',
        key: 'abc123',
        title: 'Sample Simple Card Title',
        description: 'This is a sample card description. This is fun!',
        subtitle: 'This is a sample card description. This is fun!',
        url: '/projects/1/transcripts/',
        status: 'done'
    }, 
    inprogress: {
        id: '1234',
        key: 'abc123',
        title: 'Sample Simple Card Title',
        description: 'This is a sample card description. This is fun!',
        subtitle: 'This is a sample card description. This is fun!',
        url: '/projects/1/transcripts/',
        status: 'in-progress'
    },
    failed: {
        id: '1234',
        key: 'abc123',
        title: 'Sample Simple Card Title',
        description: 'This is a sample card description. This is fun!',
        subtitle: 'This is a sample card description. This is fun!',
        url: '/projects/1/transcripts/',
        status: 'error',
        errorMessage: 'Something has gone wrong with your transcription'
    },
    
};

export const transcriptCardActions = actions({ handleEdit: 'Edit button clicked', handleDelete: 'Delete button clicked' });

storiesOf('Transcript Card', module)
    .addDecorator(StoryRouter())
    .add('Success', () => {
        return (
            <section style={{ height: '75vh', overflow: 'scroll' }}>
                <TranscriptCard
                    transcriptItem={transcriptItems.done}
                    transcriptCardActions={transcriptCardActions}
                />
            </section>
        );
    })
    .add('In Progress', () => {
        return (
            <section style={{ height: '75vh', overflow: 'scroll' }}>
                <TranscriptCard
                    transcriptItem={transcriptItems.inprogress}
                    transcriptCardActions={transcriptCardActions}
                />
            </section>
        );
    })
    .add('Failed', () => {
        return (
            <section style={{ height: '75vh', overflow: 'scroll' }}>
                <TranscriptCard
                    transcriptItem={transcriptItems.failed}
                    transcriptCardActions={transcriptCardActions}
                />
            </section>
        );
    });
