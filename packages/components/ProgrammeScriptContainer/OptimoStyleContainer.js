import React, { useState } from 'react';
import PropTypes from 'prop-types';
import arrayMove from 'array-move';
import { SortableContainer, } from 'react-sortable-hoc';
import OptimoStyleElements from './OptimoStyleElements';
import cuid from 'cuid';
import ExpandableMenu from './ExpandableMenu';

const OptimoStyleContainer = (props) => {
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

  const elements = OptimoStyleElements(items);
  const elementsList = (
    <li style={ { listStyle: 'none' } }>
      <ExpandableMenu />
      {elements}
    </li>
  );

  return (
    <SortableList useDragHandle onSortEnd={ onSortEnd }>
      {elementsList}
    </SortableList>
  );

};

OptimoStyleContainer.propTypes = {
  items: PropTypes.any,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
  handleReorder: PropTypes.func
};

export default OptimoStyleContainer;
