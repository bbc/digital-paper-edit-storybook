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
  const statusSwitch = status => {
    switch (status) {
    case 'error':
      return {
        variant: 'danger',
        icon: <FontAwesomeIcon icon={ faExclamationTriangle } />,
        message: props.message,
        text: 'Error',
        title: props.title,
        border: 'danger'
      };
    case 'in-progress':
      return {
        variant: 'info',
        text: 'In progress',
        icon: (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ),
        title: props.title,
        border: 'info'
      };
    case 'uploading':
      return {
        variant: 'info',
        text: 'In progress',
        icon: <FontAwesomeIcon icon={ faExclamationTriangle } />,
        title: props.title,
        border: 'info',
        message:
            'Do not move away from or refresh this page until upload is complete!'
      };
    case 'done':
      return {
        variant: 'success',
        text: 'Done',
        icon: <FontAwesomeIcon icon={ faCheck } />,
        // border: "secondary",
        title: props.title
        // url: `${props.url}`
        // title: <a href={`${props.url}`}>{props.title}</a>
      };
    default:
      return {
        variant: 'info',
        text: '',
        icon: (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ),
        title: props.title,
        // border: "info"
      };
    }
  };

  // const [progress, setProgress] = useState(0)

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

  const setDescription = (statusConfig) => {
    let Message;

    if (statusConfig.message) {
      Message = (
        <Alert variant={ statusConfig.variant }>
          {statusConfig.icon} {statusConfig.message}
          {props.status === 'uploading' ? (
            <ProgressBar progress={ props.progress } />
          ) : null}
        </Alert>
      );
    }

    return (
      <>
        {Message ? Message : null}
        <Badge variant={ statusConfig.variant }>{statusConfig.text}</Badge>
      </>
    );
  };

  const statusConfig = statusSwitch(props.status);
  let TranscriptCardTitle;
  if (props.status === 'done') {
    TranscriptCardTitle = (
      <LinkContainer to={ props.url } style={ { cursor: 'pointer' } }>
        <Col xs={ 6 }>
          <Card.Title style={ { color: '#007bff' } }>
            {props.icon ? props.icon : ''} {statusConfig.title}</Card.Title>
        </Col>
      </LinkContainer>
    );
  } else {
    TranscriptCardTitle = (
      <Col xs={ 6 }>
        <Card.Title style={ { color: '#757575' } }>
          {props.icon ? props.icon : ''} {statusConfig.title}
        </Card.Title>
      </Col>
    );
  }

  return (
    <Card
      border={ statusConfig.border }
      style={ { width: '100%', marginBottom: '1em' } }
    >
      <Card.Body>
        <Row>
          {TranscriptCardTitle}
          <Col xs={ 2 }>
            <p style={ { fontSize:'0.8em', color: '#757575' } }>Created {props.created}</p>
          </Col>
          <Col xs={ 2 }>
            <p style={ { fontSize:'0.8em', color: '#757575' } }>Updated {props.updated}</p>
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
          <Col xs={ 12 }>{setDescription(statusConfig)}</Col>
        </Row>
      </Card.Body>
    </Card>
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
