import React from 'react';
import BSProgressBar from 'react-bootstrap/ProgressBar';

const ProgressBar = ({ progress }) => {
  return (
    <BSProgressBar
      now={ progress }
      striped
      animated
      variant={ 'info' }
      label={ `${ progress }%` }
    />
  );
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.progress === nextProps.progress;
};

export default React.memo(ProgressBar, areEqual);
