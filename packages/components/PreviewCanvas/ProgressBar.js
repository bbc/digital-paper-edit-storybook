import React from 'react';
import Filler from './Filler';
// import styles from './ProgressBar.module.css';

const ProgressBar = (props) => {

  return (
    // <div onClick={ props.onClick } className={ styles.progressBar }>
    <div onClick={ props.onClick } >
      <Filler percentage={ props.percentage }></Filler>
    </div>

  );
};
export default ProgressBar;