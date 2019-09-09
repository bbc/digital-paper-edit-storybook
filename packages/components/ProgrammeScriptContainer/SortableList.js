import React from 'react';
import { SortableContainer, } from 'react-sortable-hoc';

const SortableList = SortableContainer(({ children }) => {
  return (
    <ul style={ { listStyle: 'none', padding: '0px' } }>
      {children}
    </ul>);
});

export default SortableList;