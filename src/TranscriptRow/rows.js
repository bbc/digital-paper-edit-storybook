import React from 'react';
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

const InProgressMessage = ({ message }) => {
  if (message === 'Transcribing...') {
    return (
      <p style={ { paddingBottom: '13px', borderBottom: 'solid 1px #c0c0c0' } }>
        <FontAwesomeIcon
          icon={ faSyncAlt }
          style={ { marginRight: '0.4rem' } } />
        <span>{`${ message }`}</span>
      </p>
    );
  } else if (message === 'Stripping audio...' || 'Sending media to a Speech-to-Text service...') {
    return (
      <p style={ { paddingBottom: '13px', borderBottom: 'solid 1px #c0c0c0' } }>
        <FontAwesomeIcon
          icon={ faSyncAlt }
          style={ { marginRight: '0.4rem' } } />
        <span>{`Preparing: ${ message }`}</span>
      </p>
    );
  } else if (message === 'Queued...') {
    return (
      <p style={ { paddingBottom: '13px', borderBottom: 'solid 1px #c0c0c0' } }>
        <FontAwesomeIcon
          icon={ faLayerGroup }
          style={ { marginRight: '0.4rem' } } />
        <span>{`In progress: ${ message }`}</span>
      </p>

    );
  }

  return <p>{message}</p>;
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

export {
  TimeRow,
  MetaRow,
  SourceRow,
  MessageRow,
  InProgressMessage
};