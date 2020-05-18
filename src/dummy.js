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

const exportItems = [
  {
    type: 'EDL',
    isWindows: true,
    showModal: true,
    exportPath: 'C:FilePath\\Great\\EDL\\Project',
    items: [ 'supercalifragalisticexpelialidocious.mp3', 'two.mp4' ]
  },
  {
    type: 'ADL',
    isWindows: true,
    showModal: true,
    exportPath: 'C:FilePath\\ADL\\Project',
    items: [ 'one.mp3', 'two.mp4' ]
  },
  {
    showModal: true,
    exportPath: '/Users/Path',
    type: 'FCP XML',
    items: [ 'one.mp3', 'two.mp4' ],
    isWindows: false
  },
  {
    showModal: false,
    exportPath: '/Users/Path',
    type: 'FCP XML',
    items: [ 'one.mp3', 'two.mp4' ],
    isWindows: false
  },
  {
    showModal: true,
    exportPath: '',
    type: 'FCP XML',
    items: [ ],
    isWindows: false
  },
  {
    showModal: true,
    exportPath: '',
    type: 'FCP XML',
    items: [ 'one.mp3' ],
    isWindows: false
  },
];

const modalItems = [
  {
    id: '1',
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
  },
  {
    projectId: '123',
    title: '',
    description: '',
    uploadCompleted: true,
    showModal: true,
    modalTitle: 'New Transcript',
    id: '3',
  },
  {
    projectId: '1234',
    title: '',
    description: '',
    uploadCompleted: true,
    showModal: false,
    modalTitle: 'New Transcript',
    id: '4',
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
        text: 'Greatest day of my life was when I wrote this text.',
        start: 0,
        end: 1
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
    speaker: 'Mrs Loud',
    words: [
      {
        text: 'Greatest day of my life was when I spoke this text.',
        start: 0,
        end: 1
      }
    ]
  },
  {
    type: 'voice-over',
    text: 'link: wonderful times of the Loud family'
  }
];

export { items, transcriptItems, modalItems, exportItems, programmeScript };
