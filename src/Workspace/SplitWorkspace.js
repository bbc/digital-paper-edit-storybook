import React, { useState, useReducer } from 'react';
import List from '../List';
import ItemFormModal from '../ItemFormModal';
import TranscriptFormModal from '../TranscriptFormModal';
import SearchBar from '../SearchBar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

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
  const [ showPaperEditModal, setShowPaperEditModal ] = useState(false);
  const [ showTranscriptModal, setShowTranscriptModal ] = useState(false);
  const [ formData, dispatchForm ] = useReducer(formReducer, initialFormState);

  const toggleShowTranscriptModal = () =>
    setShowTranscriptModal(!showTranscriptModal);
  const toggleShowPaperEditModal = () =>
    setShowPaperEditModal(!showPaperEditModal);

  return (
    <>
      <Row>
        <Col>
          <SearchBar handleSearch={ props.handleSearch } />
        </Col>
        <Col sm={ 2 }>
          <Button
            onClick={ toggleShowTranscriptModal }
            variant="outline-secondary"
            size="sm"
            block
          >
            New Transcript
          </Button>

          <Button
            onClick={ toggleShowPaperEditModal }
            variant="outline-secondary"
            size="sm"
            block
          >
            New Paper Edit
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Transcripts</h2>
          <List
            type={ 'Transcript' }
            items={ props.transcripts }
            handleEditItem={ props.handleSaveTranscript }
            handleDeleteItem={ props.handleDeleteTranscript }
          />
        </Col>
        <Col>
          <h2>Paper Edits</h2>
          <List
            items={ props.paperEdits }
            handleEditItem={ props.handleSavePaperEdit }
            handleDeleteItem={ props.handleDeletePaperEdit }
          />
        </Col>
      </Row>
      <TranscriptFormModal
        { ...formData }
        modalTitle={ 'New Transcript' }
        showModal={ showTranscriptModal }
        handleOnHide={ toggleShowTranscriptModal }
        handleSaveForm={ props.handleSaveForm }
      />
      <ItemFormModal
        { ...formData }
        modalTitle={ 'New Paper Edit' }
        showModal={ showPaperEditModal }
        handleOnHide={ toggleShowPaperEditModal }
        handleSaveForm={ props.handleSaveForm }
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
  transcripts: PropTypes.any,
  type: PropTypes.any,
};

export default SplitWorkspace;
