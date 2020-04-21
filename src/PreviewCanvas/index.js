/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import VideoContextPreview from '@bbc/digital-paper-edit-storybook/PreviewCanvas';
import PropTypes from 'prop-types';

const PreviewCanvas = props => {
  const canvasRef = useRef();

  return (
    <VideoContextPreview
      width={ props.width }
      canvasRef={ canvasRef }
      playlist={ props.playlist }
      currentTime={ props.currentTime }
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
