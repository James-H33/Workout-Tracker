import React from 'react';
import classes from './Backdrop.module.scss';

const Backdrop = ( props ) => {
  const styleClasses = [classes.Wrapper, props.isActive ? classes.Active : ''].join( ' ' );

  return (
    <div className={styleClasses} onClick={props.onDeactivate}></div>
  );
}

export default Backdrop;
