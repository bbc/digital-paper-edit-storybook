import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemsContainer from '../ItemsContainer';
import Breadcrumb from '../Breadcrumb';
import PropTypes from 'prop-types';

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
  const [ active, setActive ] = useState('transcripts');
  let workspace;

  if (mode === 'tab') {
    workspace = (
      <Tabs
        id="controlled-tab-example"
        activeKey={ active }
        onSelect={ tab => setActive(tab) }
      >
        <Tab eventKey="transcripts" title="Transcripts">
          <Container style={ { marginBottom: '5em', marginTop: '1em' } }>
            <ItemsContainer
              type={ 'Transcript' }
              items={ props.transcripts }
              handleSave={ () => props.handleSaveTranscript }
              handleDelete={ () => props.handleDeleteTranscript }/>
          </Container>
        </Tab>

        <Tab eventKey="paperedits" title="Paper Edits">
          <Container style={ { marginBottom: '5em', marginTop: '1em' } }>
            <ItemsContainer
              type={ 'PaperEdit' }
              items={ props.paperEdits }
              handleSave={ () => props.handleSavePaperEdit }
              handleDelete={ () => props.handleDeletePaperEdit } />
          </Container>
        </Tab>
      </Tabs>
    );
  } else {
    workspace = (
      <>
        <Row>
          <Col>
            <h2>Transcripts</h2>
            <ItemsContainer
              type={ 'Transcript' }
              items={ props.transcripts }
              handleSave={ () => props.handleSaveTranscript }
              handleDelete={ () => props.handleDeleteTranscript }/>
          </Col>
          <Col>
            <h2>Paper Edits</h2>
            <ItemsContainer
              type={ 'PaperEdit' }
              items={ props.paperEdits }
              handleSave={ () => props.handleSavePaperEdit }
              handleDelete={ () => props.handleDeletePaperEdit } />
          </Col>
        </Row>
      </>
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
  mode: PropTypes.string,
  name: PropTypes.string,
  paperEdits: PropTypes.array,
  transcripts: PropTypes.array
};

export default Workspace;