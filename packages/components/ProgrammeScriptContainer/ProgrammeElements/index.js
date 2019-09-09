import React from 'react';
import cuid from 'cuid';

import VoiceOver from './VoiceOver';
import PaperCut from './PaperCut';
import TitleHeading from './TitleHeading';
import Note from './Note';

import SortableItem from './SortableItem';
import SortableInsert from './SortableInsert';

const adaptAddedElement = (type, text) => {
  switch (type) {
  case 'title':
    return (<TitleHeading text={ text } />);
  case 'voice-over':
    return <VoiceOver text={ text } />;
  case 'note':
    return <Note text={ text } />;
  default:
    console.error('invalid added element type: ', type, text);

    return null;
  }
};

const ProgrammeElements = (elements, handleEdit, handleDelete) => {
  return elements.map((el, index) => {
    const type = el.type;

    if (type === 'insert') {
      console.log('insert returning');

      return (<SortableInsert text={ el.text } /> );

    }

    if (type === 'paper-cut') {
      return (
        <SortableItem
          key={ cuid() }
          index={ index }
          value={
            <PaperCut
              speaker={ el.speaker }
              words={ el.words }
            />
          }
          type={ type }
          handleDelete={ handleDelete }
          handleEdit={ null }
        />);
    }

    return (
      <SortableItem
        key={ cuid() }
        index={ index }
        value={ adaptAddedElement(type, el.text) }
        handleDelete={ handleDelete }
        handleEdit={ handleEdit }
      />
    );
  });
};

export default ProgrammeElements;