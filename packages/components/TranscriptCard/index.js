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

const TranscriptCard = (props) => {

  const handleDeleteClick = () => {
    const confirmDeleteText = "Click OK if you wish to delete or cancel if you don't";
    const cancelDeleteText = 'All is good, it was not deleted';

    const confirmationPrompt = confirm(confirmDeleteText);

    if (confirmationPrompt) {
      if (props.handleDeleteItem) {
        props.handleDeleteItem(props.id);
      } else {
        alert(cancelDeleteText);
      }

    }
  };

  const handleEditClick = () => {
    props.handleEditItem(props.id);
  };

  const iconStatus = {
    'in-progress': 'info',
    'done': 'success',
    'error': 'danger'
  };

  const setDescription = () => {
    if (props.status === 'error') {
      return (
        <>
          <Alert variant='danger'>
            <FontAwesomeIcon icon={ faExclamationTriangle } />
            {props.errorMessage}
          </Alert>
          <Badge variant='danger'>
            Error
          </Badge>
        </>
      );
    }
    else {
      const badgeText = (props.status.charAt(0).toUpperCase() + props.status.slice(1)).replace('-', ' ');

      return (
        <Badge variant={ iconStatus[props.status] }>{badgeText}</Badge>
      );
    };
  };

  const setStatusIcon = () => {
    if (props.status === 'in-progress') {
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
    } else {
      return (
        <Button variant={ iconStatus[props.status] } size="sm" disabled>
          <FontAwesomeIcon icon={ props.status === 'danger' ? faExclamationTriangle : faCheck } />
        </Button>
      );
    };
  };

  const title = props.status && props.status === 'done' ? <a href={ `${ props.url }` }> {props.title}</a> : props.title;

  return (
    <Card
      border={ props.status && props.status === 'danger' ? status : null }
      style={ { width: '100%', marginBottom: '2em' } }
    >
      <Card.Body>
        <Row>
          <Col xs={ 12 } sm={ 9 }>
            <Card.Title>
              {props.icon ? props.icon : ''} {title}
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
            {setStatusIcon()}
          </Col>
        </Row>
        <Row>
          <Col xs={ 12 }>
            <Card.Subtitle className="mb-2 text-muted">
              {props.subtitle}
            </Card.Subtitle>
          </Col>
        </Row>
        <Row>
          <Col xs={ 12 }>
            {setDescription()}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

TranscriptCard.propTypes = {
  description: PropTypes.string,
  errorMessage: PropTypes.string,
  handleDeleteItem: PropTypes.func.isRequired,
  handleEditItem: PropTypes.func.isRequired,
  icon: PropTypes.any,
  id: PropTypes.number.isRequired,
  status: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};

TranscriptCard.defaultProps = {
  title: '',
  description: '',
  subtitle: '',
};

export default TranscriptCard;
