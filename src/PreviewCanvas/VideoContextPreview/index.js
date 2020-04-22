import React, { useState, useEffect } from 'react';
import VideoContextProgressBar from './VideoContextProgressBar';
import Controls from '../Controls';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import VideoContext from 'videocontext';

const secondsToHHMMSSFormat = (seconds) => {
  return new Date(seconds * 1000).toISOString().substr(11, 8);
};

const VideoContextPreview = (props) => {
  const [ videoContext, setVideoContext ] = useState();

  useEffect(() => {

    const updateVideoContext = (mediaItems) => {
      videoContext.reset();
      mediaItems.forEach((media) => {
        const { type, sourceStart, start, duration, src } = media;
        const node = videoContext[type](src, sourceStart);
        node.startAt(start);
        node.stopAt(start + duration);
        node.connect(videoContext.destination);
      });
    };

    if (props.canvasRef && props.canvasRef.current) {
      setVideoContext(new VideoContext(props.canvasRef.current));
    }

    if (videoContext) {
      updateVideoContext(props.playlist);
    }

  }, [ props.canvasRef, props.playlist ]);

  const updateVideoContext = (media) => {
    media.forEach(({ type, sourceStart, start, duration, src }) => {
      const node = videoContext[type](src, sourceStart);
      node.startAt(start);
      node.stopAt(start + duration);
      node.connect(videoContext.destination);
    });
  };

  const handleStop = () => {
    videoContext.pause();
    setVideoContext(vc => {
      vc.currentTime = 0;

      return vc;
    });
  };

  if (videoContext) {
    updateVideoContext(props.playlist);
  }

  return (
    <>
      <Row
        className={ 'justify-content-center' }
        style={ { backgroundColor: 'black' } }
      >
        <canvas
          ref={ props.canvasRef }
          width={ props.width }
          height={ props.width * 0.5625 }
        />
      </Row>
      <Row
        className={ 'justify-content-center' }
        style={ { backgroundColor: 'lightgrey' } }
      >
        {videoContext ? <VideoContextProgressBar videoContext={ videoContext }/> : null}
      </Row>
      <Row style={ { marginTop: '0.4em' } }>
        {videoContext ? <Controls
          handlePlay={ () => videoContext.play() }
          handlePause={ () => videoContext.pause() }
          handleStop={ () => handleStop() }
        /> : null}
      </Row>
      <Row className={ 'justify-content-center' }>
        Total duration: {videoContext ? secondsToHHMMSSFormat(videoContext.duration) : '00:00:00'}
      </Row>
    </>
  );
};

VideoContextPreview.propTypes = {
  canvasRef: PropTypes.any,
  playlist: PropTypes.array,
  videoContext: PropTypes.any,
  width: PropTypes.any
};

VideoContextPreview.defaultProps = {
  playlist: []
};

export default VideoContextPreview;
