import React from 'react';
import classes from './Modal.module.scss';

const Modal = ( props ) => {
  const styleClasses = [classes.Modal, props.isActive ? classes.Active : ''].join( ' ' );

  return (
    <div className={styleClasses}>
      {props.children}
    </div>
  );
}

export default Modal;
