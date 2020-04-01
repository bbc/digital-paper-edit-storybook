import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';
import { LinkContainer } from 'react-router-bootstrap';
import ProgressBar from '../ProgressBar';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardDottedMenu from '../CardDottedMenu';

import {
  faCheck,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

const TranscriptCard = props => {

  const handleDelete = () => {
    const confirmDeleteText = 'Are you sure you want to delete?';
    const cancelDeleteText = 'Cancelled delete';

    const confirmationPrompt = confirm(confirmDeleteText);

    if (confirmationPrompt) {
      if (props.handleDeleteItem) {
        props.handleDeleteItem(props.id);
      }
    } else {
      alert(cancelDeleteText);
    }
  };

  const handleEdit = () => {
    props.handleEditItem(props.id);
  };

  const DoneBadge = <Badge variant={ 'success' }>Done</Badge>;
  const InProgressBadge = <Badge variant={ 'info' }>In progress</Badge>;
  const ErrorBadge = <Badge variant={ 'danger' }>Error</Badge>;

  const Created = <p style={ { fontSize:'0.8em', color: '#757575' } }>Created {props.created}</p>;
  const Updated = <p style={ { fontSize:'0.8em', color: '#757575' } }>Updated {props.updated}</p>;

  const ErrorCard = () => {
    return (
      <Card
        border={ 'danger' }
        style={ { width: '100%', marginBottom: '1em' } }
      >
        <Card.Body>
          <Row>
            <Col xs={ 6 }>
              <Card.Title style={ { color: '#757575' } }>
                <FontAwesomeIcon icon={ faExclamationTriangle } /> {props.title}
              </Card.Title>
            </Col>
            <Col xs={ 2 }>
              {Created}
            </Col>
            <Col xs={ 2 }>
              {Updated}
            </Col>
            <Col xs={ 1 }>
              <CardDottedMenu
                handleEdit={ handleEdit }
                handleDelete={ handleDelete }
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 12 }>
              <Card.Subtitle className="mb-2 text-muted">
                {props.description}
              </Card.Subtitle>
            </Col>
          </Row>
          <Row>
            <Col xs={ 12 }>
              <Alert variant={ 'danger' }>
                <FontAwesomeIcon icon={ faExclamationTriangle } /> {props.message}
              </Alert>
              {ErrorBadge}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  };

  const InProgressCard = () => {
    return (
      <Card
        border={ 'info' }
        style={ { width: '100%', marginBottom: '1em' } }
      >
        <Card.Body>
          <Row>
            <Col xs={ 6 }>
              <Card.Title style={ { color: '#757575' } }>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                /> {props.title}
              </Card.Title>
            </Col>
            <Col xs={ 2 }>
              {Created}
            </Col>
            <Col xs={ 2 }>
              {Updated}
            </Col>
            <Col xs={ 1 }>
              <CardDottedMenu
                handleEdit={ handleEdit }
                handleDelete={ handleDelete }
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 12 }>
              <Card.Subtitle className="mb-2 text-muted">
                {props.description}
              </Card.Subtitle>
            </Col>
          </Row>
          <Row>
            <Col xs={ 12 }>
              {InProgressBadge}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  };

  const UploadingCard = () => {
    return (
      <Card
        border={ 'info' }
        style={ { width: '100%', marginBottom: '1em' } }
      >
        <Card.Body>
          <Row>
            <Col xs={ 6 }>
              <Card.Title style={ { color: '#757575' } }>
                {props.icon ? props.icon : ''} {props.title}
              </Card.Title>
            </Col>
            <Col xs={ 2 }>
              {Created}
            </Col>
            <Col xs={ 2 }>
              {Updated}
            </Col>
            <Col xs={ 1 }>
              <CardDottedMenu
                handleEdit={ handleEdit }
                handleDelete={ handleDelete }
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 12 }>
              <Card.Subtitle className="mb-2 text-muted">
                {props.description}
              </Card.Subtitle>
            </Col>
          </Row>
          <Row>
            <Col xs={ 12 }>
              <Alert variant={ 'info' }>
                <FontAwesomeIcon icon={ faExclamationTriangle } />  Do not move away from or refresh this page until upload is complete!
                <ProgressBar progress={ props.progress } />
              </Alert>
              {InProgressBadge}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );

  };

  const DoneCard = () => {
    return (
      <Card
        border={ '' }
        style={ { width: '100%', marginBottom: '1em' } }
      >
        <Card.Body>
          <Row>
            <LinkContainer to={ props.url } style={ { cursor: 'pointer' } }>
              <Col xs={ 6 }>
                <Card.Title style={ { color: '#007bff' } }>
                  <FontAwesomeIcon icon={ faCheck } /> {props.title}</Card.Title>
              </Col>
            </LinkContainer>
            <Col xs={ 2 }>
              {Created}
            </Col>
            <Col xs={ 2 }>
              {Updated}
            </Col>
            <Col xs={ 1 }>
              <CardDottedMenu
                handleEdit={ handleEdit }
                handleDelete={ handleDelete }
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 12 }>
              <Card.Subtitle className="mb-2 text-muted">
                {props.description}
              </Card.Subtitle>
            </Col>
          </Row>
          <Row>
            <Col xs={ 12 }>
              {DoneBadge}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  };

  let card;

  if (props.status === 'done') {
    card = DoneCard();
  } else if (props.status === 'in-progress') {
    card = InProgressCard();
  } else if (props.status === 'error') {
    card = ErrorCard();
  } else if (props.status === 'uploading') {
    card = UploadingCard();
  }

  return (
    <>
      {card}
    </>
  );
};

TranscriptCard.propTypes = {
  description: PropTypes.string,
  message: PropTypes.string,
  handleDeleteItem: PropTypes.func.isRequired,
  handleEditItem: PropTypes.func.isRequired,
  icon: PropTypes.any,
  id: PropTypes.string.isRequired,
  status: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  progress: PropTypes.number,
  created: PropTypes.string,
  updated: PropTypes.string
};

TranscriptCard.defaultProps = {
  title: '',
  description: ''
};

export default React.memo(TranscriptCard);
