import React from 'react';
import cuid from 'cuid';
import OptimoStyleItem from './OptimoStyleItem';

import VoiceOver from './VoiceOver';
import PaperCut from './PaperCut';
import TitleHeading from './TitleHeading';
import Note from './Note';

const adaptAddedElement = (type, text) => {
  switch (type) {
  case 'title':
    return <TitleHeading text={ text } />;
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
    const key = cuid();
    const type = el.type;
    const text = el.text;

    const handleFns = {
      edit: () => { handleEdit(index);},
      delete: () => { handleDelete(index);}
    };

    if (type === 'insert') {
      // don't return anything
      console.warn('No insert');
    }

    if (type === 'paper-cut') {
      // edit on double click
      // handleFns.edit = null;

      return (
        <OptimoStyleItem
          key={ key }
          index={ index }
          value={
            <PaperCut
              speaker={ el.speaker }
              words={ el.words }
            />
          }
          handleFns={ handleFns }
        />);
    }

    return (
      <OptimoStyleItem
        key={ key }
        index={ index }
        value={ adaptAddedElement(type, text) }
        handleFns={ handleFns }
      />
    );
  });
};

export default ProgrammeElements;
