import React, { useState, useEffect, useRef } from 'react';
import VideoContextProgressBar from './VideoContextProgressBar';
import Controls from '../Controls';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import VideoContext from 'videocontext';

const secondsToHHMMSSFormat = (seconds) => {
  return new Date(seconds * 1000).toISOString().substr(11, 8);
};

const VideoContextPreview = (props) => {
  const canvasRef = props.canvasRef;
  const [ videoContext, setVideoContext ] = useState();
  const [ duration, setDuration ] = useState(0);
  const [ sourceNodes, setSourceNodes ] = useState([]);

  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      setVideoContext(new VideoContext(canvasRef.current));
    }
  }, [ canvasRef ]);

  useEffect(() => {
    const updateVideoContext = () => {
      const vc = new VideoContext(canvasRef.current);
      props.playlist.forEach((media) => {
        const {
          type,
          sourceStart,
          start,
          duration: mediaDuration,
          src,
        } = media;
        const end = start + mediaDuration;
        const node = vc[type](src, sourceStart);

        node.startAt(start);
        node.stopAt(end);
        node.connect(vc.destination);
      });
      setVideoContext(vc);
      setDuration(vc.duration);
      setSourceNodes(vc._sourceNodes);
    };

    // we will always add or remove, not edit in-place
    if (sourceNodes.length !== props.playlist.length) {
      updateVideoContext();
    }

  }, [ props.playlist, videoContext ]);

  const handleStop = () => {
    videoContext.pause();
    setVideoContext((vc) => {
      vc.currentTime = 0;

      return vc;
    });
  };

  return (
    <>
      <Row
        className={ 'justify-content-center' }
        style={ { backgroundColor: 'black' } }
      >
        <canvas
          ref={ canvasRef }
          width={ props.width }
          height={ props.width * 0.5625 }
        />
      </Row>
      <Row
        className={ 'justify-content-center' }
        style={ { backgroundColor: 'lightgrey' } }
      >
        {videoContext ? (
          <VideoContextProgressBar videoContext={ videoContext } />
        ) : null}
      </Row>
      <Row style={ { marginTop: '0.4em' } }>
        {videoContext ? (
          <Controls
            handlePlay={ () => videoContext.play() }
            handlePause={ () => videoContext.pause() }
            handleStop={ () => handleStop() }
          />
        ) : null}
      </Row>

      <Row className={ 'justify-content-center' }>
        Total duration: {secondsToHHMMSSFormat(duration)}
      </Row>
    </>
  );
};

VideoContextPreview.propTypes = {
  playlist: PropTypes.array,
  width: PropTypes.any,
};

export default VideoContextPreview;
