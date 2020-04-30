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
  const { canvasRef, currentTime } = props;
  const [ videoContext, setVideoContext ] = useState();
  const [ duration, setDuration ] = useState(0);

  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      setVideoContext(new VideoContext(canvasRef.current));
    }
  }, [ canvasRef ]);

  useEffect(() => {
    const updateVideoContext = () => {
      videoContext.reset();
      const connectVideoContext = (media) => {
        const {
          type,
          sourceStart,
          start,
          duration: mediaDuration,
          src,
        } = media;
        const end = start + mediaDuration;
        const node = videoContext[type](src, sourceStart);

        node.startAt(start);
        node.stopAt(end);
        node.connect(videoContext.destination);
      };
      props.playlist.forEach((media) =>
        connectVideoContext(media, videoContext)
      );

      setDuration(videoContext.duration);
    };

    if (videoContext) {
      updateVideoContext();
    }
  }, [ props.playlist, videoContext ]);

  useEffect(() => {
    if (currentTime) {

      setVideoContext(vc => {
        vc.currentTime = currentTime;
        vc.play();

        return vc;
      });
    }
  }, [ currentTime, videoContext ]);

  const handleStop = () => {
    videoContext.pause();
    setVideoContext((vc) => {
      vc.currentTime = 0;

      return vc;
    });
  };

  const formattedDuration = secondsToHHMMSSFormat(duration);

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
        Total duration: {formattedDuration}
      </Row>
    </>
  );
};

VideoContextPreview.propTypes = {
  canvasRef: PropTypes.any,
  playlist: PropTypes.array,
  width: PropTypes.number,
  currentTime: PropTypes.number
};

export default VideoContextPreview;
