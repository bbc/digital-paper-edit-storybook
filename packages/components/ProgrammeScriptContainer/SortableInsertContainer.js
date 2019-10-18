import React, { useState } from 'react';
import PropTypes from 'prop-types';
import arrayMove from 'array-move';
import { SortableContainer, } from 'react-sortable-hoc';
import ProgrammeElements from './ProgrammeElements';

const SortableInsertContainer = (props) => {
  const [ items, setItems ] = useState(props.items);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const result = arrayMove(items, oldIndex, newIndex);
    props.handleReorder(result);
    setItems(result);
  };

  const SortableList = SortableContainer(({ children }) =>
    <ul style={ { listStyle: 'none', padding: '0px' } }>
      {children}
    </ul>
  );

  const elements = ProgrammeElements(items, props.handleEdit, props.handleDelete);

  return (
    <SortableList useDragHandle onSortEnd={ onSortEnd }>
      {elements}
    </SortableList>
  );

};

SortableInsertContainer.propTypes = {
  items: PropTypes.any,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
  handleReorder: PropTypes.func
};

export default SortableInsertContainer;
