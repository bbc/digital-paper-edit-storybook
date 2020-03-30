import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import ProgressBar from '../ProgressBar';
import PropTypes from 'prop-types';

const getPercentage = (currentTime, duration) => currentTime / duration * 100;

const VideoContextProgressBar = (props) => {
  const ref = useRef();

  const [ percentage, setPercentage ] = useState(0);
  const [ videoContext, setVideoContext ] = useState();
  const [ width, setWidth ] = useState(0);

  let offsetWidth;

  if (ref.current) {
    offsetWidth = ref.current.offsetWidth;
  }

  const handleClick = ({ nativeEvent: { offsetX } }) => {
    videoContext.currentTime = (offsetX / width) * videoContext.duration;
    const percent = getPercentage(videoContext.currentTime, videoContext.duration);
    setPercentage(percent);
  };

  useEffect(() => {
    if (offsetWidth !== width) {
      setWidth(offsetWidth);
    }
  }, [ offsetWidth ]);

  useEffect(() => {
    const fillerAnimation = () => {
      const percent = getPercentage(videoContext.currentTime, videoContext.duration);
      setPercentage(percent);
      requestAnimationFrame(fillerAnimation);
    };

    setVideoContext(props.videoContext);

    if (videoContext) {
      fillerAnimation();
    }
  }, [ props.videoContext, videoContext ]);

  return (
    <div ref={ ref } style={ { width:'100%' } }>
      <ProgressBar onClick={ handleClick } percentage={ percentage } />
    </div>
  );
};

VideoContextProgressBar.propTypes = {
  videoContext: PropTypes.any
};

export default VideoContextProgressBar;
