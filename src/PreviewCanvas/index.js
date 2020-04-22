/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import VideoContextPreview from './VideoContextPreview';
import PropTypes from 'prop-types';

const PreviewCanvas = props => {
  const canvasRef = useRef();
  const { playlist, width } = props;

  return (
    <VideoContextPreview
      width={ width }
      canvasRef={ canvasRef }
      playlist={ playlist }
    />
  );
};

PreviewCanvas.propTypes = {
  playlist: PropTypes.array,
  width: PropTypes.number
};

PreviewCanvas.defaultProps = {
  playlist: []
};

export default PreviewCanvas;
