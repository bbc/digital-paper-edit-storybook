import React from 'react';
import Filler from './Filler';
// import styles from './ProgressBar.module.css';

const ProgressBar = (props) => {

  return (
    // <div onClick={ props.onClick } className={ styles.progressBar }>
    <div onClick={ props.onClick }
      style={ {
        position: 'relative',
        height: '12px',
        width: '100%',
        opacity: '1'
      } } >
      <Filler percentage={ props.percentage }></Filler>
    </div>

  );
};
export default ProgressBar;