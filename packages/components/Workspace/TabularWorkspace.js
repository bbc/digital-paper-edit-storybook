import React, { useState } from 'react';
import ItemsContainer from '../ItemsContainer';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import PropTypes from 'prop-types';

const TabularWorkspace = (props) => {
  const [ active, setActive ] = useState('transcripts');

  return (
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
            handleSave={ props.handleSaveTranscript }
            handleDelete={ props.handleDeleteTranscript }/>
        </Container>
      </Tab>

      <Tab eventKey="paperedits" title="Paper Edits">
        <Container style={ { marginBottom: '5em', marginTop: '1em' } }>
          <ItemsContainer
            type={ 'PaperEdit' }
            items={ props.paperEdits }
            handleSave={ props.handleSavePaperEdit }
            handleDelete={ props.handleDeletePaperEdit } />
        </Container>
      </Tab>
    </Tabs>
  );
};

TabularWorkspace.propTypes = {
  handleDeletePaperEdit: PropTypes.any,
  handleDeleteTranscript: PropTypes.any,
  handleSavePaperEdit: PropTypes.any,
  handleSaveTranscript: PropTypes.any,
  paperEdits: PropTypes.any,
  transcripts: PropTypes.any
};

export default TabularWorkspace;