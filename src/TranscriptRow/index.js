import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import { LinkContainer } from 'react-router-bootstrap';
import moment from 'moment';
import { TimeRow, SourceRow, MessageRow, InProgressMessage } from './rows';
import ProgressBar from '../ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faTrash,
  faExclamationTriangle,
  faPen,
  faEllipsisV,
  faCheckCircle,
  faHourglassEnd
} from '@fortawesome/free-solid-svg-icons';

moment().format();

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
              bsPrefix="custom-menu"
              variant="secondary"
              size="sm"
              style={ {
                borderWidth: 0,
                backgroundColor: 'transparent',
                color: 'grey'
              } }
            >
              <FontAwesomeIcon icon={ faEllipsisV } />
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

  const ErrorCard = () => {
    return (
      <>
        <HeaderRow>
          <p style={ { color: 'grey' } }>
            <strong>{props.title}</strong>
          </p>
        </HeaderRow>
        <MessageRow>
          <div style={ { color: '#f76900' } }>
            <FontAwesomeIcon icon={ faExclamationTriangle }
              style={ {
                marginRight: '0.4rem'
              } }/>
            <span>Transcription failed, please try again</span>
          </div>
        </MessageRow>
        <TimeRow
          mediaDuration={ props.mediaDuration }
          created={ props.created }
        />
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

        <MessageRow>
          <span style={ { marginBottom: '15px', display: 'block' } }>
            This file will be automatically deleted after 60 days.
          </span>
          <InProgressMessage
            message={ props.message ? props.message : 'In progress...' }
            mediaDuration={ props.mediaDuration }
          />
        </MessageRow>
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
          <FontAwesomeIcon icon={ faExclamationTriangle } /> This file will be automatically deleted after 60 days.
          {typeof props.progress === 'number' ? (
            <div style={ {
              display: 'flex'
            } }>
              <span style={ { marginRight: '0.4rem' } }>Uploading...</span>
              <ProgressBar
                progress={ props.progress }
              />
            </div>
          ) : null}
        </MessageRow>
        <TimeRow
          mediaDuration={ props.mediaDuration }
          created={ props.created }
        />
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
            <p style={ {
              display: 'flex'
            } }>
              <FontAwesomeIcon
                icon={ faCheckCircle }
                style={ {
                  color: 'green',
                  marginRight: '0.4rem'
                } }/>
              <strong>
                {props.title}
              </strong>
            </p>
          </LinkContainer>
        </HeaderRow>
        <SourceRow
          mediaType={ props.mediaType }
          created={ props.created }
        />
        <TimeRow
          mediaDuration={ props.mediaDuration }
          created={ props.created }
        />
      </>
    );
  };

  const ExpiredCard = () => {
    return (
      <>
        <HeaderRow>
          <p style={ { color: 'grey' } }>
            <strong>{props.title}</strong>
          </p>
        </HeaderRow>
        <MessageRow>
          <FontAwesomeIcon icon={ faHourglassEnd } /> This file is no longer available.
        </MessageRow>
        <TimeRow
          mediaDuration={ props.mediaDuration }
          created={ props.created }
        />
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
  } else if (props.status === 'expired') {
    card = ExpiredCard();
  }

  return <>{card}</>;
};

TranscriptRow.propTypes = {
  description: PropTypes.string,
  message: PropTypes.string,
  mediaDuration: PropTypes.string,
  transcriptionDuration: PropTypes.number,
  handleDeleteItem: PropTypes.func.isRequired,
  handleEditItem: PropTypes.func.isRequired,
  icon: PropTypes.any,
  id: PropTypes.string.isRequired,
  status: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  progress: PropTypes.number,
  created: PropTypes.string,
  mediaType: PropTypes.string
};

TranscriptRow.defaultProps = {
  title: '',
  description: '',
};

export default React.memo(TranscriptRow);
