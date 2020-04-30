import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import arrayMove from 'array-move';
import { SortableContainer, } from 'react-sortable-hoc';
import ProgrammeElements from './ProgrammeElements';
import PreviewCanvas from '../PreviewCanvas';

const ProgrammeScriptContainer = (props) => {
  const [ items, setItems ] = useState(props.items);
  const [ timeOnClick, setTimeOnClick ] = useState();
  const width = useState(300);
  const playlist = props.playlist;

  const previewCardRef = useRef();

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const result = arrayMove(items, oldIndex, newIndex);
    props.handleReorder(result);
    setItems(result);
  };

  const handleDoubleClickOnProgrammeScript = (e) => {
    if (e.target.className === 'words') {
      const wordCurrentTime = e.target.dataset.start;
      setTimeOnClick(wordCurrentTime);
    }
  };

  const SortableList = SortableContainer(({ children }) =>
    <ul style={ { listStyle: 'none', padding: '0px' } }>
      {children}
    </ul>
  );

  const elements = ProgrammeElements(items, props.handleEdit, props.handleDelete);

  return (
    <Card>
      <Card.Header ref={ previewCardRef }>
        <PreviewCanvas width={ width } playlist={ playlist } currentTime={ timeOnClick }/>
      </Card.Header>
      <article
        onDoubleClick={ handleDoubleClickOnProgrammeScript }
      >
        <SortableList useDragHandle onSortEnd={ onSortEnd }>
          {elements}
        </SortableList>
      </article>
    </Card>
  );
};

ProgrammeScriptContainer.propTypes = {
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
  handleReorder: PropTypes.func,
  items: PropTypes.any,
  playlist: PropTypes.any
};

export default ProgrammeScriptContainer;
