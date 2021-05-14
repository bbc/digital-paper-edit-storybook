import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faPlay,
  faVolumeUp,
  faSyncAlt,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons';

moment().format();

const getExpiryDate = (createdDate) => {
  const dateCreated = moment(new Date(createdDate));
  const dateNow = moment();
  const expiryDate = moment(new Date(dateCreated)).add(60, 'days');
  const daysUntilExpiry = expiryDate.diff(dateNow, 'days');

  return daysUntilExpiry;
};

const formatMessage = (message, mediaDuration) => {
  if (message === 'Transcribing...') {
    return `Transcribing${ mediaDuration ? `, approx. ${ mediaDuration }` : '...' }`;
  } else if (message === 'Stripping audio...' || 'Sending media to a Speech-to-Text service...') {
    return `Preparing: ${ message }`;
  }

  return `Transcribing: ${ message }`;
};

const InProgressMessage = ({ message, mediaDuration }) => {
  return (
    <p style={ { paddingBottom: '13px', borderBottom: 'solid 1px #c0c0c0' } }>
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