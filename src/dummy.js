const items = [
  {
    id: '1234',
    projectId: '5678',
    key: 'abc123',
    title: 'Sample Simple Card Title One',
    description: 'This is a sample card description. This is fun!',
    display: true,
    url: '/projects/1/transcripts/1234'
  },
  {
    id: '5678',
    projectId: '5678',
    key: 'def456',
    title: 'Sample Simple Card Title Two',
    description: 'This is a sample card description. This is fun!',
    display: true,
    url: '/projects/1/transcripts/5678'
  }
];

const transcriptItems = [
  {
    id: '1',
    key: 'transcript_key_1',
    title: 'Title - Done Transcript',
    description: 'This is a sample card description. This is fun!',
    url: '/projects/1/transcripts/',
    projectId: '1',
    created: { seconds: 1576057570, nanoseconds: 390000000 },
    status: 'done',
    display: true
  },
  {
    id: '3',
    key: 'transcript_key_2',
    title: 'Title - In Progress Transcript',
    description: 'This is a sample card description. This is fun!',
    url: '/projects/1/transcripts/',
    projectId: '1',
    created: { seconds: 1576057570, nanoseconds: 390000000 },

    status: 'in-progress',
    display: true
  },
  {
    id: '4',
    key: 'transcript_key_3',
    title: 'Title - Error Transcript',
    description: 'This is a sample card description. This is fun!',
    url: '/projects/1/transcripts/',
    status: 'error',
    message: 'Something has gone wrong with your transcription',
    projectId: '1',
    created: { seconds: 1576057570, nanoseconds: 390000000 },
    updated: null,
    display: true
  },
  {
    id: '5',
    key: 'transcript_key_4',
    title: 'Title - Uploading Transcript',
    description: 'This is a sample card description. This is fun!',
    url: '/projects/1/transcripts/',
    message: 'warning message',
    display: true,
    progress: 100,
    projectId: '1',
    created: { seconds: 1576057570, nanoseconds: 390000000 },
    status: 'uploading',
    updated: null
  }
];

const modalItems = [
  {
    id: '1',
    type: 'Project',
    showModal: true,
    title: 'Example Project Title',
    description: 'This is a sample card description. This is fun!',
    url: '/projects/1/transcripts/1234',
    modalTitle: 'Edit Project'
  },
  {
    showModal: true,
    modalTitle: 'New Project',
    id: '2',
    type: 'Project'
  },
  {
    projectId: '123',
    title: '',
    description: '',
    uploadCompleted: true,
    showModal: true,
    modalTitle: 'New Transcript',
    id: '3',
    type: 'Transcript'
  },
  {
    projectId: '1234',
    title: '',
    description: '',
    uploadCompleted: true,
    showModal: false,
    modalTitle: 'New Transcript',
    id: '4',
    type: 'Transcript'
  }
];

const programmeScript = [
  {
    type: 'title',
    text: 'An immense Achievement'
  },
  {
    type: 'paper-cut',
    id: 1,
    speaker: 'Mr Loud',
    words: [
      {
        text: 'Despite ',
        start: 0,
        end: 0.529
      },
      {
        text: 'our ',
        start: 0.529,
        end: 0.679
      },
      {
        text: 'best ',
        start: 0.679,
        end: 1.089
      }, {
        text: 'efforts ',
        start: 1.089,
        end: 1.829
      }, {
        text: 'only ',
        start: 1.829,
        end: 2.279
      },
      {
        text: '9% ',
        start: 2.279,
        end: 3.419
      },
      {
        text: 'of ',
        start: 3.429,
        end: 3.599
      }, {
        text: 'all ',
        start: 3.609,
        end: 3.949
      }, {
        text: 'plastic ',
        start: 3.949,
        end: 4.48
      },
      {
        text: 'we ',
        start: 4.48,
        end: 4.709
      },
      {
        text: 'use ',
        start: 4.8,
        end: 5.279
      }, {
        text: 'winds ',
        start: 5.289,
        end: 5.91
      }, {
        text: 'up ',
        start: 5.91,
        end: 6.109
      },
      {
        text: 'being ',
        start: 6.12,
        end: 6.37
      },
      {
        text: 'recycled. ',
        start: 6.37,
        end: 7.34
      }
    ]
  },
  {
    type: 'note',
    text: 'Maybe a little bit obnoxious'
  },
  {
    type: 'insert',
    text: 'Insert New Selection here'
  },
  {
    type: 'paper-cut',
    id: 2,
    start: 0.0,
    end: 3.8,
    speaker: 'Mrs Loud',
    words: [
      {
        speaker: 'TBC',
        text: 'And ',
        start: 8.45,
        end: 8.65,
      },
      {
        speaker: 'TBC',
        text: 'even ',
        start: 8.65,
        end: 8.96,
      }, {
        speaker: 'TBC',
        text: 'worse ',
        start: 8.96,
        end: 9.7
      }, {
        speaker: 'TBC',
        text: 'plastic ',
        start: 9.7,
        end: 10.2,
      }, {
        text: 'is ',
        start: 10.2,
        end: 10.3,
        type: 'word',
        speaker: 'TBC',
      },
    ]
  },
  {
    type: 'voice-over',
    text: 'link: wonderful times of the Loud family'
  }
];

export { items, transcriptItems, modalItems, programmeScript };
