import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

const CustomAlert = ({ ...props } ) => {

  const [ showAlert, toggleShowAlert ] = useState(props.show);

  const handleDismiss = () => {
    toggleShowAlert(false);
  };

  const setAlertHeading = () => {
    return props.heading ? <Alert.Heading>{props.heading}</Alert.Heading> : null;
  };

  const setAlert = () => {
    if (showAlert) {
      return (
        <Alert
          variant={ props.variant }
          onClose={ handleDismiss }
          dismissible
        >
          {setAlertHeading()}
          {props.message}
        </Alert>
      );
    } else {
      return null;
    }
  };

  return setAlert();
};

CustomAlert.propTypes = {
  show: PropTypes.bool.isRequired,
  heading: PropTypes.string,
  message: PropTypes.string,
  vatiant: PropTypes.string,
};

CustomAlert.defaultProps = {
  show: true,
};

export default CustomAlert;