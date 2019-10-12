import React, { useState, useReducer } from 'react';
import List from '../List';
import FormModal from '../FormModal';
import SearchBar from '../SearchBar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

const initialFormState = {
  title: '',
  description: '',
  id: null
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
        <Col>
          <SearchBar handleSearch={ props.handleSearch } />
        </Col>
        <Col sm={ 2 }>
          <Button onClick={ props.toggleShowModal }
            variant="outline-secondary"
            size="sm" block>
              New Item
          </Button>

        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Transcripts</h2>
          <List
            items={ props.transcripts }
            handleEditItem={ () => props.handleSaveTranscript }
            handleDeleteItem={ () => props.handleDeleteTranscript }/>
        </Col>
        <Col>
          <h2>Paper Edits</h2>
          <List
            items={ props.paperEdits }
            handleEditItem={ () => props.handleSavePaperEdit }
            handleDeleteItem={ () => props.handleDeletePaperEdit } />
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
  paperEdits: PropTypes.any,
  toggleShowModal: PropTypes.any,
  transcripts: PropTypes.any
};

export default SplitWorkspace;