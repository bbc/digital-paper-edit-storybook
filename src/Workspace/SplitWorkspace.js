import React, { useState, useReducer } from 'react';
import List from '../List';
import FormModal from '../FormModal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faCircle,
} from '@fortawesome/free-solid-svg-icons';

const initialFormState = {
  title: '',
  description: '',
  id: null,
};

const formReducer = (state = initialFormState, { type, payload }) => {
  switch (type) {
  case 'update':
    return { ...state, ...payload };
  case 'reset': {
    return { initialFormState };
  }
  default:
    return state;
  }
};

const SplitWorkspace = (props) => {
  const [ showModal, setShowModal ] = useState(false);
  const [ formData, dispatchForm ] = useReducer(formReducer, initialFormState);

  return (
    <>
      <Row>
        <Col sm={ 3 }>
          <Button
            onClick={ props.toggleShowModal }
            variant="outline-secondary"
            size="sm"
            block
          >
            <FontAwesomeIcon icon={ faCircle } /> New Programme Script
          </Button>
        </Col>
        <Col sm={ 3 }>
          <Button
            onClick={ props.toggleShowModal }
            variant="outline-secondary"
            size="sm"
            block
          >
            <FontAwesomeIcon icon={ faCircle } /> Convert Media to Transcript
          </Button>
        </Col>
      </Row>
      <hr></hr>
      <Row style={ { marginBottom: '15px' } }>
        <Col>
          <h2>&quot;{props.name}&quot;</h2>
        </Col>
      </Row>
      <Row>
        <Col sm={ 8 }>
          <p>Programme Script Titles</p>
          <List
            type={ 'row' }
            items={ props.paperEdits }
            handleEditItem={ () => props.handleSavePaperEdit }
            handleDeleteItem={ () => props.handleDeletePaperEdit }
          />
        </Col>
        <Col>
          <p>Converted Transcripts</p>
          <List
            type={ 'trow' }
            items={ props.transcripts }
            handleEditItem={ () => props.handleSaveTranscript }
            handleDeleteItem={ () => props.handleDeleteTranscript }
          />
        </Col>
      </Row>
      <FormModal
        { ...formData }
        id={ props.id }
        modalTitle={ 'New Item' }
        showModal={ showModal }
        handleOnHide={ props.toggleShowModal }
        handleSaveForm={ () => props.handleSaveForm }
      />
    </>
  );
};

SplitWorkspace.propTypes = {
  handleDeletePaperEdit: PropTypes.any,
  handleDeleteTranscript: PropTypes.any,
  handleSaveForm: PropTypes.any,
  handleSavePaperEdit: PropTypes.any,
  handleSaveTranscript: PropTypes.any,
  handleSearch: PropTypes.any,
  id: PropTypes.any,
  name: PropTypes.any,
  paperEdits: PropTypes.any,
  toggleShowModal: PropTypes.any,
  transcripts: PropTypes.any,
  type: PropTypes.any
};

export default SplitWorkspace;
