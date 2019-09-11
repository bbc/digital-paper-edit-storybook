import React, { useState } from 'react';
import PropTypes from 'prop-types';
import arrayMove from 'array-move';
import { SortableContainer, } from 'react-sortable-hoc';
import ProgrammeElements from './ProgrammeElements';

const SortableList = SortableContainer(({ children }) => {
  return (
    <ul style={ { listStyle: 'none', padding: '0px' } }>
      {children}
    </ul>
  );
});

const ProgrammeScriptContainer = (props) => {
  const programmeElements = ProgrammeElements(props.items, props.handleEdit, props.handleDelete);
  const [ elements, setElements ] = useState(programmeElements);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const result = arrayMove(elements, oldIndex, newIndex);
    props.handleReorder(result);
    setElements(result);
  };

  return (
    <SortableList useDragHandle onSortEnd={ onSortEnd }>
      {elements}
    </SortableList>
  );

};

ProgrammeScriptContainer.propTypes = {
  items: PropTypes.any,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
  handleReorder: PropTypes.func
};

export default ProgrammeScriptContainer;
