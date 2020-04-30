import PropTypes from 'prop-types';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ProgrammeScriptContainer from '../ProgrammeScriptContainer';
import PreviewCanvas from '../PreviewCanvas';

const ProgrammeScriptEditor = (props) => {
  const Heading = (
    <h2
      title={ `Programme Script Title: ${ props.title }` }>
    </h2>
  );

  const ProgrammeCard = (
    <Card>
      <article
        style={ { height: '60vh', overflow: 'scroll' } }
      >
        <ProgrammeScriptContainer
          items={ props.items }
          handleReorder={ props.handleReorder }
          handleDelete={ props.handleDelete }
          handleEdit={ props.handleEdit }
        />

      </article>
    </Card>
  );

  // information around progressbar in the playlist object

  return (
    <Container>
      <Row>
        <Col>
          {Heading}
          {ProgrammeCard}
        </Col>
        <Col>
          {Heading}
          {ProgrammeCard}
        </Col>
      </Row>
    </Container>
  );
};

ProgrammeScriptEditor.propTypes = {
  handleDelete: PropTypes.any,
  handleEdit: PropTypes.any,
  handleReorder: PropTypes.any,
  items: PropTypes.any,
  playlist: PropTypes.any,
  title: PropTypes.any,
  currentTime: PropTypes.any
};

export default ProgrammeScriptEditor;
