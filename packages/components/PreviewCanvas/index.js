/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import VideoContextPreview from './VideoContextPreview';

const PreviewCanvas = (props) => {
  const canvasRef = useRef();

  return (
    <VideoContextPreview
      width={ props.width }
      height={ props.height }
      canvasRef={ canvasRef }
      playlist={ props.playlist }
    />
  );
};

PreviewCanvas.propTypes = {
  height: PropTypes.any,
  playlist: PropTypes.array,
  width: PropTypes.any
};

PreviewCanvas.defaultProps = {
  playlist: []
};

export default PreviewCanvas;
