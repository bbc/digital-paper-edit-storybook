import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { differenceInDays, addDays } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faPlay,
  faVolumeUp,
  faSyncAlt,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons';

const getExpiryDate = (createdDate) => {
  const dateCreated = new Date(createdDate);
  const dateNow = new Date();
  const expiryDate = addDays(dateCreated, 60);
  const daysUntilExpiry = differenceInDays(expiryDate, dateNow);

  return daysUntilExpiry;
};

const formatMessage = (message, mediaDuration) => {
  if (message === 'Transcribing...' || 'Stripping audio...' || 'Sending media to a Speech-to-Text service...') {
    return mediaDuration ? `Transcribing, approx. ${ mediaDuration }` : message;
  }

  // Will return queued message

  return `Transcribing: ${ message }`;
};

const InProgressMessage = ({ message, mediaDuration }) => {
  return (
    <p>
      <FontAwesomeIcon
        icon={ message === 'Queued...' ? faLayerGroup : faSyncAlt }
        style={ { marginRight: '0.4rem' } } />
      <span>{formatMessage(message, mediaDuration)}</span>
    </p>
  );
};

const MessageRow = ({ children }) => {
  return (
    <Row style={ { width: '100%', fontSize: '13px', marginBottom: '0.4rem' } }>
      <Col xs={ 12 }>
        {children}
      </Col>
    </Row>
  );
};

const SourceRow = (props) => {
  const renderMediaType = (mediaType) => {
    if (mediaType.includes('video')) {
      return <div style={ { display: 'flex', marginBottom: '0.4rem' } } ><FontAwesomeIcon icon={ faPlay } style={ { marginRight: '0.4rem' } } /><p>{`Video, expires in ${ getExpiryDate(props.created) } days`}</p></div>;
    }
    if (mediaType.includes('audio')) {
      return <div style={ { display: 'flex', marginBottom: '0.4rem' } }><FontAwesomeIcon icon={ faVolumeUp } style={ { marginRight: '0.4rem' } } /><p>{`Audio, expires in ${ getExpiryDate(props.created) } days`}</p></div>;
    }
  };

  return (
    <MetaRow>
      {props.mediaType ? renderMediaType(props.mediaType) : null }
    </MetaRow>);
};

const MetaRow = ({ children }) => {
  return (
    <Row style={ {
      fontSize: '13px', lineHeight: '1', marginBottom: '-30px', color: 'grey'
    } }>
      <Col style={ { paddingBottom: '15px' } }>
        {children}
      </Col>
    </Row>);
};

const TimeRow = (props) => {

  return (
    <MetaRow>
      <p style={ { paddingBottom: '13px', borderBottom: 'solid 1px #c0c0c0' } }>
        {props.mediaDuration ? `Duration: ${ props.mediaDuration } | ` : null}
        {props.created ? `Upload: ${ props.created }` : null}
      </p>
    </MetaRow>
  );
};

TimeRow.propTypes = {
  created: PropTypes.string,
  mediaDuration: PropTypes.string
};

SourceRow.propTypes = {
  mediaType: PropTypes.string,
  created: PropTypes.string
};

MetaRow.propTypes = {
  children: PropTypes.any
};

InProgressMessage.propTypes = {
  mediaDuration: PropTypes.string,
  message: PropTypes.string
};

MessageRow.propTypes = {
  children: PropTypes.any,
};

export {
  TimeRow,
  MetaRow,
  SourceRow,
  MessageRow,
  InProgressMessage
};