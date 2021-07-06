import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap-css-only/css/bootstrap.css';

const ProjectRow = (props) => {
  const handleDuplicateItem = () => {
    props.handleDuplicateItem(props.id);
  };

  const handleEditItem = () => {
    props.handleEditItem(props.id);
  };

  const handleDeleteItem = () => {
    const message = 'Do you want to delete your item?';
    const confirmDelete = window.confirm(message);
    if (confirmDelete) {
      props.handleDeleteItem(props.id);
    }
  };

  return (
    <Row>
      <Col xs={ 6 } sm={ 6 }>
        <LinkContainer
          to={ props.url }
          style={ { color: '#007bff', cursor: 'pointer', marginTop: '0.4rem' } }
          onClick={ props.handleClick }
        >
          <p>
            <strong>{props.title}</strong>
          </p>
        </LinkContainer>
      </Col>
      <Col xs={ 4 } sm={ 4 }>
        <p style={ { marginTop: '0.4rem' } }>
          {props.created} / {props.updated}
        </p>
      </Col>
      <Col xs={ 1 } sm={ 1 }>
        <Dropdown>
          <Dropdown.Toggle
            bsPrefix="custom-menu"
            variant="secondary"
            size="sm"
            style={ {
              margin: '0.2rem',
              borderWidth: 0,
              backgroundColor: 'transparent',
              color: 'grey',
            } }
          >
            <FontAwesomeIcon icon={ faEllipsisV } />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as="button" onClick={ handleDuplicateItem }>
              <FontAwesomeIcon icon={ faCopy } /> Duplicate
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={ handleEditItem }>
              <FontAwesomeIcon icon={ faPen } /> Edit title / description
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={ handleDeleteItem }>
              <FontAwesomeIcon icon={ faTrash } /> Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  );
};

ProjectRow.propTypes = {
  created: PropTypes.any,
  description: PropTypes.string,
  handleDeleteItem: PropTypes.func.isRequired,
  handleDuplicateItem: PropTypes.func,
  handleEditItem: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  showLinkPath: PropTypes.func,
  title: PropTypes.string.isRequired,
  updated: PropTypes.any,
  url: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

ProjectRow.defaultProps = {
  title: '',
  description: '',
};

export default ProjectRow;
