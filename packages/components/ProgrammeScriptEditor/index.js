import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSync,
} from '@fortawesome/free-solid-svg-icons';
import ProgrammeScriptContainer from '../ProgrammeScriptContainer';
import PreviewCanvas from '../PreviewCanvas';

class ProgramScript extends Component {
  constructor(props) {
    super(props);
  }

  Heading = () => {
    return (
      <h2
        title={ `Programme Script Title: ${ this.props.title }` }>
      </h2>);
  }

  ProgrammeCard = () => {
    return (
      <Card>
        <Card.Header>
          <PreviewCanvas width={ 300 } playlist={ this.props.playlist } />
        </Card.Header>

        <Card.Body>
          <article
            style={ { height: '60vh', overflow: 'scroll' } }
          >
            <ProgrammeScriptContainer
              items={ this.props.items }
              handleReorder={ this.props.handleReorder }
              handleDelete={ this.props.handleDelete }
              handleEdit={ this.props.handleEdit }
            />

          </article>
        </Card.Body>
      </Card>);
  }

  // information around progressbar in the playlist object
  render() {
    const heading = this.Heading();
    const card = this.ProgrammeCard();

    return (
      <Container>
        <Row>
          <Col>
            {heading}
            {card}
          </Col>
          <Col>
            {heading}
            {card}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProgramScript;
