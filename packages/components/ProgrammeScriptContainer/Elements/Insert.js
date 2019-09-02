import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Insert = (({ text }) => (
  <span style={ { width: '100%', backgroundColor: 'orange', color: 'white' } }>
    <FontAwesomeIcon icon={ faArrowAltCircleRight } />
    {text}
  </span>)

);

Insert.propTypes = {
  text: PropTypes.any
};

export default Insert;