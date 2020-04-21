import PropTypes from 'prop-types';
import React from 'react';
import {
  faTrash,
  faPen,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons';

import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardDottedMenu = props => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="outline-secondary"
        id="dropdown-no-caret"
        size="sm"
        aria-label="Transcript Dropdown menu"
      >
        <FontAwesomeIcon icon={ faEllipsisH } />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={ props.handleEdit }>
          <FontAwesomeIcon icon={ faPen } /> Edit
        </Dropdown.Item>
        <Dropdown.Item
          onClick={ props.handleDelete }>
          <FontAwesomeIcon icon={ faTrash } /> Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

CardDottedMenu.propTypes = {
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func
};

export default CardDottedMenu;