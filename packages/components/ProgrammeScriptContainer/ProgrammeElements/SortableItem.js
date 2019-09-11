import React from 'react';
import { SortableElement } from 'react-sortable-hoc';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SortableHandle from './SortableHandle';

const SortableItem = SortableElement(({ value, index, handleDelete, handleEdit }) => {

  const EditIcon = (
    <FontAwesomeIcon
      className={ 'text-muted' }
      icon={ faPen }
      onClick={ () => { handleEdit(index); } }>
    </FontAwesomeIcon>
  );

  const DeleteIcon = (
    <FontAwesomeIcon
      className={ 'text-muted' }
      icon={ faTrash }
      onClick={ () => { handleDelete(index); } }>
    </FontAwesomeIcon>
  );

  return (
    <ul style={ { listStyle: 'none', padding: '0px' } }>
      <Row>
        <Col xs={ 1 } sm={ 1 } md={ 1 } ld={ 1 } xl={ 1 } >
          <SortableHandle />
        </Col>
        <Col xs={ 8 } sm={ 9 } md={ 9 } ld={ 9 } xl={ 9 } >
          {value}
        </Col>
        <Col xs={ 1 } sm={ 1 } md={ 1 } ld={ 1 } xl={ 1 } >
          {handleEdit ? EditIcon : null}
        </Col>
        <Col xs={ 1 } sm={ 1 } md={ 1 } ld={ 1 } xl={ 1 } >
          {handleDelete ? DeleteIcon : null}
        </Col>
      </Row>
    </ul>
  );
});

export default SortableItem;