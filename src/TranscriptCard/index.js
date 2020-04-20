import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';
import { LinkContainer } from 'react-router-bootstrap';
import ProgressBar from '../ProgressBar';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faTrash,
  faCheck,
  faExclamationTriangle,
  faPen
} from '@fortawesome/free-solid-svg-icons';

const TranscriptCard = props => {

  const handleDelete = () => {
    const confirmed = confirm('Are you sure you want to delete?');

    if (confirmed) {
      if (props.handleDeleteItem) {
        props.handleDeleteItem(props.id);
      }
    }
  };

  const handleEdit = () => {
    props.handleEditItem(props.id);
  };

  const ErrorCard = () => {
    return (
      <Card
        border={ 'danger' }
        style={ { width: '100%', marginBottom: '1em' } }
      >
        <Card.Body>
          <Row>
            <Col xs={ 8 } sm={ 10 }>
              <Card.Title style={ { color: '#757575' } }>
                <FontAwesomeIcon icon={ faExclamationTriangle } /> {props.title}
              </Card.Title>
            </Col>
            <Col xs={ 2 } sm={ 1 }>
              <Card.Link>
                <Button
                  onClick={ handleEdit }
                  variant="outline-secondary"
                  size="sm"
                  aria-label="Edit button"
                >
                  <FontAwesomeIcon icon={ faPen } />
                </Button>
              </Card.Link>
            </Col>
            <Col xs={ 2 } sm={ 1 }>
              <Card.Link>
                <Button
                  onClick={ handleDelete }
                  variant="outline-secondary"
                  size="sm"
                  aria-label="Delete button"
                >
                  <FontAwesomeIcon icon={ faTrash } />
                </Button>
              </Card.Link>
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
              <Badge variant={ 'danger' }>Error</Badge>
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
            <Col xs={ 8 } sm={ 10 }>
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
            <Col xs={ 2 } sm={ 1 }>
              <Card.Link>
                <Button
                  onClick={ handleEdit }
                  variant="outline-secondary"
                  size="sm"
                  aria-label="Edit button"
                >
                  <FontAwesomeIcon icon={ faPen } />
                </Button>
              </Card.Link>
            </Col>
            <Col xs={ 2 } sm={ 1 }>
              <Card.Link>
                <Button
                  onClick={ handleDelete }
                  variant="outline-secondary"
                  size="sm"
                  aria-label="Delete button"
                >
                  <FontAwesomeIcon icon={ faTrash } />
                </Button>
              </Card.Link>
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
              <Badge variant={ 'info' }>In progress</Badge>
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
            <Col xs={ 8 } sm={ 10 }>
              <Card.Title style={ { color: '#757575' } }>
                {props.icon ? props.icon : ''} {props.title}
              </Card.Title>
            </Col>

            <Col xs={ 2 } sm={ 1 }>
              <Card.Link>
                <Button
                  onClick={ handleEdit }
                  variant="outline-secondary"
                  size="sm"
                  aria-label="Edit button"
                >
                  <FontAwesomeIcon icon={ faPen } />
                </Button>
              </Card.Link>
            </Col>
            <Col xs={ 2 } sm={ 1 }>
              <Card.Link>
                <Button
                  onClick={ handleDelete }
                  variant="outline-secondary"
                  size="sm"
                  aria-label="Delete button"
                >
                  <FontAwesomeIcon icon={ faTrash } />
                </Button>
              </Card.Link>
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
                {typeof(props.progress) === 'number' ? <ProgressBar progress={ props.progress } /> : null}
              </Alert>
              <Badge variant={ 'info' }>In progress</Badge>
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
              <Col xs={ 8 } sm={ 10 }>
                <Card.Title style={ { color: '#007bff' } }>
                  <FontAwesomeIcon icon={ faCheck } /> {props.title}</Card.Title>
              </Col>
            </LinkContainer>
            <Col xs={ 2 } sm={ 1 }>
              <Card.Link>
                <Button
                  onClick={ handleEdit }
                  variant="outline-secondary"
                  size="sm"
                  aria-label="Edit button"
                >
                  <FontAwesomeIcon icon={ faPen } />
                </Button>
              </Card.Link>
            </Col>
            <Col xs={ 2 } sm={ 1 }>
              <Card.Link>
                <Button
                  onClick={ handleDelete }
                  variant="outline-secondary"
                  size="sm"
                  aria-label="Delete button"
                >
                  <FontAwesomeIcon icon={ faTrash } />
                </Button>
              </Card.Link>
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
              <Badge variant={ 'success' }>Done</Badge>
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
  progress: PropTypes.number
};

TranscriptCard.defaultProps = {
  title: '',
  description: ''
};

export default React.memo(TranscriptCard);
