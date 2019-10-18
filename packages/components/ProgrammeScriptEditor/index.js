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
    this.state = {
      resetPreview: false,
      playlist: props.playlist
    };
  }

  // information around progressbar in the playlist object
  render() {
    return (
      <>
        <Container>
          <Row>

            <Col>
            </Col>
            <Col>
              <h2
                className={ [ 'text-truncate', 'text-muted' ].join(' ') }
                title={ `Programme Script Title: ${ this.state.programmeScript ? this.state.programmeScript.title : '' }` }>
                {this.state.programmeScript ? this.state.programmeScript.title : ''}
              </h2>
              <Card>
                <Card.Header>
                  { !this.state.resetPreview ?
                    <PreviewCanvas width="100%" height="100%" playlist={ this.state.playlist } />
                    : null }
                </Card.Header>

                <Card.Header>
                  <Row noGutters>
                    <Col sm={ 12 } md={ 3 } >
                      <Button variant="outline-secondary"
                        onClick={ this.handleUpdatePreview }
                        title="update preview"
                      >
                        <FontAwesomeIcon icon={ faSync } /> Preview
                      </Button>
                    </Col>
                  </Row>
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
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ProgramScript;
