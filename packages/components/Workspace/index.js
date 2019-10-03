import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from '../Breadcrumb';
import PropTypes from 'prop-types';
import TabularWorkspace from './TabularWorkspace';
import SplitWorkspace from './SplitWorkspace';

const genBreadcrumb = (name) => [
  {
    name: 'Projects',
    link: '/projects'
  },
  {
    name: name
  }
];

const Workspace = (props) => {
  const name = props.name;
  const mode = props.mode;
  let workspace;

  if (mode === 'tab') {

    workspace = (
      <TabularWorkspace { ...props }/>
    );

  } else if (mode === 'split') {
    // need to change form to show two options
    workspace = (
      <SplitWorkspace { ...props }/>
    );
  }

  return (
    <Container style={ { marginBottom: '5em', marginTop: '1em' } }>
      <Row>
        <Col sm={ 12 }>
          <Breadcrumb items={ genBreadcrumb(name) } />
        </Col>
      </Row>
      { workspace }
    </Container>
  );
};

Workspace.propTypes = {
  handleDeletePaperEdit: PropTypes.func,
  handleDeleteTranscript: PropTypes.func,
  handleSavePaperEdit: PropTypes.func,
  handleSaveTranscript: PropTypes.func,
  handleSearch: PropTypes.func,
  handleSaveForm: PropTypes.func,
  mode: PropTypes.string,
  name: PropTypes.string,
  paperEdits: PropTypes.array,
  toggleShowModal: PropTypes.any,
  transcripts: PropTypes.array,
  id: PropTypes.any
};

export default Workspace;