import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faCheck,
  faExclamationTriangle,
  faPen
} from '@fortawesome/free-solid-svg-icons';

const TranscriptCard = ({ transcriptItem, handleEdit, handleDelete }) => {

  const handleDeleteClick = () => {
    const confirmDeleteText = "Click OK if you wish to delete or cancel if you don't";
    const cancelDeleteText = 'All is good, it was not deleted';

    const confirmationPrompt = confirm(confirmDeleteText);

    if (confirmationPrompt) {
      return handleDelete ? handleDelete(transcriptItem.id) : alert(cancelDeleteText);
    }
  };

  const handleEditClick = () => {
    handleEdit(transcriptItem.id);
  };

  const setStatus = () => {
    if (transcriptItem.status === 'error') {
      return 'danger';
    };
    if (transcriptItem.status === 'in-progress') {
      return 'info';
    };
    if (transcriptItem.status === 'done') {
      return 'success';
    };
  };

  const status = setStatus();

  const setDescription = () => {
    switch (status) {
    case 'info':
      return <Badge variant="info">In progress</Badge>;
    case 'success':
      return <Badge variant="success">Success</Badge>;
    case 'danger':
      return (
        <>
          <Alert variant="danger">
            <FontAwesomeIcon icon={ faExclamationTriangle } />{' '}
            {transcriptItem.errorMessage}
          </Alert>
          <Badge variant="danger">Error</Badge>
        </>
      );
    }
  };

  const setStatusIcon = () => {
    switch (status) {
    case 'info':
      return (
        <Button variant="info" size="sm" disabled>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        </Button>
      );
    case 'danger':
      return (
        <Button variant="danger" size="sm" disabled>
          <FontAwesomeIcon icon={ faExclamationTriangle } />
        </Button>
      );
    case 'success':
      return (
        <Button variant="success" size="sm" disabled>
          <FontAwesomeIcon icon={ faCheck } />
        </Button>
      );
    }
  };

  const description = setDescription();
  const statusIcon = setStatusIcon();
  const borderStatus = status && status === 'danger' ? 'danger' : null;
  const title = status && status === 'success' ? <a href={ `${ transcriptItem.url }` }> {transcriptItem.title}</a> : transcriptItem.title;

  return (
    <Card
      border={ borderStatus }
      style={ { width: '100%', marginBottom: '2em' } }
    >
      <Card.Body>
        <Row>
          <Col xs={ 12 } sm={ 9 }>
            <Card.Title>
              {transcriptItem.icon ? transcriptItem.icon : ''} {title}
            </Card.Title>
          </Col>
          <Col xs={ 2 } sm={ 1 }>
            <Card.Link>
              <Button
                onClick={ () => handleEditClick() }
                variant="outline-secondary"
                size="sm"
              >
                <FontAwesomeIcon icon={ faPen } />
              </Button>
            </Card.Link>
          </Col>
          <Col xs={ 2 } sm={ 1 }>
            <Card.Link>
              <Button
                onClick={ () => handleDeleteClick() }
                variant="outline-secondary"
                size="sm"
              >
                <FontAwesomeIcon icon={ faTrash } />
              </Button>
            </Card.Link>
          </Col>
          <Col xs={ 1 }>
            {statusIcon}
          </Col>
        </Row>
        <Row>
          <Col xs={ 12 }>
            <Card.Subtitle className="mb-2 text-muted">
              {transcriptItem.subtitle}
            </Card.Subtitle>
          </Col>
        </Row>
        <Row>
          <Col xs={ 12 }>
            {description}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

TranscriptCard.propTypes = {
  transcriptItem: PropTypes.object.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

TranscriptCard.defaultProps = {
  transcriptItem: {
    key: 'key_1234',
    id: '1234',
    title: 'Default Title String',
    description: 'This is a default description string',
    subtitle: 'This is a default subtitle',
    status: 'done',
    url: '/test/path/here',
  },
  handleEdit: () => {
    console.log('Edit button clicked');
  },
  handleDelete: () => {
    console.log('Delete button clicked');
  }
};
export default TranscriptCard;