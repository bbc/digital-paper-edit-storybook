import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Alert from 'react-bootstrap/Alert';
import { LinkContainer } from 'react-router-bootstrap';
import ProgressBar from '../ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faTrash,
  faExclamationTriangle,
  faPen,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';

const TranscriptRow = (props) => {
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

  const HeaderRow = ({ children }) => {
    return (
      <Row style={ { lineHeight: '100%', marginTop: '0.5rem' } }>
        <Col xs={ 8 } sm={ 9 }>
          {children}
        </Col>
        <Col xs={ 2 } sm={ 1 }>
          <Dropdown>
            <Dropdown.Toggle
              variant="secondary"
              size="sm"
              style={ {
                borderWidth: 0,
                backgroundColor: 'transparent',
                color: 'grey',
              } }
            >
              <FontAwesomeIcon icon={ faEllipsisH } />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as="button" onClick={ handleEdit }>
                <FontAwesomeIcon icon={ faPen } /> Edit title / description
              </Dropdown.Item>
              <Dropdown.Item as="button" onClick={ handleDelete }>
                <FontAwesomeIcon icon={ faTrash } /> Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    );
  };
  const MessageRow = ({ children }) =>
    <Row style={ { width: '100%', fontSize: '13px' } }>
      <Col xs={ 12 }>
        {children}
      </Col>
    </Row>;

  const MetaRow = ({ children }) => {
    return (
      <Row style={ { fontSize: '13px', lineHeight: '1', marginBottom: '-30px', color: 'grey'
      } }>
        <Col style={ { paddingBottom:'15px' } }>
          {children}
        </Col>
      </Row>);
  };

  const SourceRow = () =>
    <MetaRow>
      <p>
        Converted from {props.mediaType ? props.mediaType : 'unknown'}
      </p>
    </MetaRow>;

  const TimeRow = () =>
    <MetaRow>
      <p>
        {props.mediaDuration ? `Duration: ${ props.mediaDuration } | ` : null}
        {props.transcriptionDuration
          ? `Time taken: ${ props.transcriptionDuration } | `
          : null}
        {props.created ? `Uploaded: ${ props.created }` : null}
      </p>
    </MetaRow>;

  const ErrorCard = () => {
    return (
      <>
        <HeaderRow>
          <p style={ { color: 'grey' } }>
            <strong>{props.title}</strong>
          </p>
        </HeaderRow>
        <MessageRow>
          <Alert variant={ 'danger' } style={ { lineHeight: 'normal' } }>
            <FontAwesomeIcon icon={ faExclamationTriangle } /> {props.message}
          </Alert>
        </MessageRow>
        <TimeRow></TimeRow>
      </>
    );
  };

  const InProgressCard = () => {
    return (
      <>
        <HeaderRow>
          <p style={ { color: 'grey' } }>
            <strong>{props.title}</strong>
          </p>
        </HeaderRow>

        {props.message ? (
          <MessageRow>
            <Alert variant={ 'info' } style={ { lineHeight: 'normal' } }>{props.message}</Alert></MessageRow>
        ) : null}
        <SourceRow></SourceRow>
        <TimeRow></TimeRow>
      </>
    );
  };

  const UploadingCard = () => {
    return (
      <>
        <HeaderRow>
          <p style={ { color: 'grey' } }>
            <strong>{props.title}</strong>
          </p>
        </HeaderRow>
        <MessageRow>
          <Alert variant={ 'info' } style={ { lineHeight: 'normal' } }>
            <FontAwesomeIcon icon={ faExclamationTriangle } /> Do not move away
            from or refresh this page until upload is complete!
            {typeof props.progress === 'number' ? (
              <ProgressBar progress={ props.progress } />
            ) : null}
          </Alert>
        </MessageRow>
        <SourceRow></SourceRow>
        <TimeRow></TimeRow>
      </>
    );
  };

  const DoneCard = () => {
    return (
      <>
        <HeaderRow>
          <LinkContainer
            to={ props.url }
            style={ { color: '#007bff', cursor: 'pointer' } }
          >
            <strong>
              <p>
                {props.title}
              </p>
            </strong>
          </LinkContainer>
        </HeaderRow>
        <SourceRow></SourceRow>
        <TimeRow></TimeRow>
      </>
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

  return <>{card}</>;
};

TranscriptRow.propTypes = {
  description: PropTypes.string,
  message: PropTypes.string,
  mediaDuration: PropTypes.number,
  transcriptionDuration: PropTypes.number,
  handleDeleteItem: PropTypes.func.isRequired,
  handleEditItem: PropTypes.func.isRequired,
  icon: PropTypes.any,
  id: PropTypes.string.isRequired,
  status: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  progress: PropTypes.number,
};

TranscriptRow.defaultProps = {
  title: '',
  description: '',
};

export default React.memo(TranscriptRow);
