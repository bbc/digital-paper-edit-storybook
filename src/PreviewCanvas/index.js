/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import VideoContextPreview from './VideoContextPreview';
import PropTypes from 'prop-types';

const PreviewCanvas = props => {
  const canvasRef = useRef();
  const { playlist, width, currentTime } = props;

  return (
    <VideoContextPreview
      width={ width }
      canvasRef={ canvasRef }
      currentTime={ currentTime }
      playlist={ playlist }
    />
  );
};

PreviewCanvas.propTypes = {
  playlist: PropTypes.array,
  width: PropTypes.number,
  currentTime: PropTypes.number
};

PreviewCanvas.defaultProps = {
  playlist: []
};

export default PreviewCanvas;
