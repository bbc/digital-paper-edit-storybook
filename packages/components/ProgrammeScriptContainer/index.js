import React from 'react';
import PropTypes from 'prop-types';
import arrayMove from 'array-move';
import SortableList from './SortableList';

const ProgrammeScriptContainer = (props) => {
  const elements = props.elements;

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const result = arrayMove(elements, oldIndex, newIndex);
    props.handleReorder(result);
  };

  const sortableProgramme = (
    <SortableList useDragHandle onSortEnd={ onSortEnd }>
      {elements}
    </SortableList>);

  return (
    <>
      { sortableProgramme }
    </>
  );
};

ProgrammeScriptContainer.propTypes = {
  elements: PropTypes.any,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
  handleReorder: PropTypes.func
};

export default ProgrammeScriptContainer;
