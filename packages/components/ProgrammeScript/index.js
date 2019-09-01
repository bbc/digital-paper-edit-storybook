import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
  sortableContainer,
  sortableElement,
  sortableHandle
} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import VoiceOver from './VoiceOver';
import PaperCut from './PaperCut';
import TitleHeading from './TitleHeading';
import Note from './Note';

import {
  faGripLines,
  faPen,
  faTrash,
  faArrowAltCircleLeft,
  faArrowAltCircleRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InsertPoint = (({ text }) => <span style={ { width: '100%', backgroundColor: 'orange', color: 'white' } }> <FontAwesomeIcon icon={ faArrowAltCircleRight } /> {text} </span>);

const DragHandle = sortableHandle(() => <span> <FontAwesomeIcon icon={ faGripLines } /> </span>);

const SortableItem = sortableElement(({ value, index, type, handleDelete, handleEdit }) => {
  return (<li>
    <Row>
      <Col xs={ 1 } sm={ 1 } md={ 1 } ld={ 1 } xl={ 1 } style={ { backgroundColor: type === 'insert-point' ? 'orange' : '' } }>
        <DragHandle />
      </Col>
      <Col xs={ 8 } sm={ 9 } md={ 9 } ld={ 9 } xl={ 9 } style={ { backgroundColor: type === 'insert-point' ? 'orange' : '' } }>
        {value}
      </Col>
      <Col xs={ 1 } sm={ 1 } md={ 1 } ld={ 1 } xl={ 1 } style={ { backgroundColor: type === 'insert-point' ? 'orange' : '' } }>
        {/* TODO: if paper-cut  then don't show edit/pen icon */}
        {type !== 'paper-cut' && type !== 'insert-point' ? <FontAwesomeIcon className={ 'text-muted' } icon={ faPen } onClick={ () => { handleEdit(index); } } /> : null}

      </Col>
      <Col xs={ 1 } sm={ 1 } md={ 1 } ld={ 1 } xl={ 1 } style={ { backgroundColor: type === 'insert-point' ? 'orange' : '' } }>
        {/* TODO: pass a prop to remove element from list */}
        {type !== 'insert-point' ? <FontAwesomeIcon className={ 'text-muted' } icon={ faTrash } onClick={ () => {handleDelete(index);} } /> : null}
        {type === 'insert-point' ? <FontAwesomeIcon style={ { color: 'white' } } icon={ faArrowAltCircleLeft } /> : null}
      </Col>
    </Row>
  </li>);
});

const SortableContainer = sortableContainer(({ children }) => {
  return <ul style={ { listStyle: 'none', padding: '0px' } }>{children}</ul>;
});

const ProgrammeScript = (props) => {

  const elements = props.elements;

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const result = arrayMove(elements, oldIndex, newIndex);
    console.log('onsort end');
    console.log(result);
    props.handleReorder(result);
  };

  const getElement = (el) => {
    switch (el.type) {
    case 'title':
      return { el:<TitleHeading key={ el.id } title={ el.text } />, type: el.type };
    case 'voice-over':
      return { el:<VoiceOver key={ el.id } text={ el.text } />, type: el.type };
    case 'paper-cut':
      return { el: <PaperCut key={ el.id } el={ el } speaker={ el.speaker } words={ el.words }/>, type: el.type };
    case 'note':
      return { el: <Note key={ el.id } text={ el.text } />, type: el.type };
    case 'insert-point':
      return { el: <InsertPoint text={ el.text } />, type: el.type };
    default:
      console.error('invalid programme element type');

      return null;
    }
  };

  let sortableProgramme;

  if (elements) {
    const programme = elements.map((el) => getElement(el));

    sortableProgramme =
      <SortableContainer useDragHandle onSortEnd={ onSortEnd }>
        {programme.map((value, index) => (
          <SortableItem
            key={ `item-${ index }` }
            index={ index }
            value={ value.el }
            type={ value.type }
            handleDelete={ props.handleDeleteElement }
            handleEdit={ props.handleEditElement }
          />
        ))}
      </SortableContainer>;
  }

  return (
    <>
      { sortableProgramme }
    </>
  );
};

export default ProgrammeScript;

