import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import { LinkContainer } from 'react-router-bootstrap';
import moment from 'moment';
import ProgressBar from '../ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faTrash,
  faExclamationTriangle,
  faPen,
  faEllipsisV,
  faPlay,
  faVolumeUp,
  faCheckCircle,
  faSyncAlt
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

  const getExpiryDate = (createdDate) => {
    const dateCreated = moment(new Date(createdDate));
    console.log('dateCreated: ', dateCreated);
    const dateNow = moment();
    console.log('dateNow: ', dateNow);
    const expiryDate = moment(new Date(dateCreated)).add(60, 'days');
    console.log('expiryDate: ', expiryDate);
    const daysUntilExpiry = expiryDate.diff(dateNow, 'days');
    console.log('daysUntilExpiry: ', daysUntilExpiry);

    return daysUntilExpiry;
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

  const InProgressMessage = ({ message }) => {
    if (message === 'Transcribing...') {
      return (
        <p style={ { paddingBottom: '13px', borderBottom: 'solid 1px #c0c0c0' } }>
          <FontAwesomeIcon
            icon={ faSyncAlt }
            style={ { marginRight: '0.4rem' } }/>
          <span>{message}</span>
        </p>
      );
    } else if (message === 'Stripping audio...' || 'Sending media to a Speech-to-Text service...') {
      return (
        <p style={ { paddingBottom: '13px', borderBottom: 'solid 1px #c0c0c0' } }>
          <FontAwesomeIcon
            icon={ faSyncAlt }
            style={ { marginRight: '0.4rem' } } />
          <span>{`Transcribing: ${ message }`}</span>
        </p>
      );
    }

    return <p>{message}</p>;
  };

  const SourceRow = () => {
    const renderMediaType = (mediaType) => {
      if (mediaType.includes('video')) {
        return <div style={ { display: 'flex' } } ><FontAwesomeIcon icon={ faPlay } style={ { marginRight: '0.4rem' } } /><p>{`Video, expires in ${ getExpiryDate(props.created) } days`}</p></div>;
      }
      if (mediaType.includes('audio')) {
        return <div style={ { display: 'flex' } }><FontAwesomeIcon icon={ faVolumeUp } style={ { marginRight: '0.4rem' } }/><p>{`Audio, expires in ${ getExpiryDate(props.created) } days`}</p></div>;
      }
    };

    return (
      <MetaRow>
        {props.mediaType ? renderMediaType(props.mediaType) : <p>unknown</p>}
      </MetaRow>);
  };

  const TimeRow = () =>
    <MetaRow>
      <p style={ { paddingBottom: '13px', borderBottom: 'solid 1px #c0c0c0' } }>
        {props.mediaDuration ? `Duration: ${ props.mediaDuration } | ` : null}
        {props.created ? `Upload: ${ props.created }` : null}
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
          <div style={ { color: '#f76900' } }>
            <FontAwesomeIcon icon={ faExclamationTriangle }
              style={ {
                marginRight: '0.4rem'
              } }/>
            <span>Transcription failed, please try again</span>
          </div>
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
            <span style={ { marginBottom: '15px', display: 'block' } }>
              This file will be automatically deleted after 60 days.
            </span>
            <InProgressMessage message={ props.message }/>
          </MessageRow>

        ) : null}
        {/* <TimeRow></TimeRow> */}
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
