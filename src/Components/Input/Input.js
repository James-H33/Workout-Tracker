import React from 'react';
import classes from './Input.module.scss';

const getClass = (className) => {
  switch (className) {
    case 'Standard':
      return classes.Standard;
    case 'SetInput':
      return classes.SetInput;
    default:
      return classes.Input;
  }
}

const Input = ( props ) => {
  const updated = (e) => {
    props.updated(e);
  }

  const styleClass = getClass(props.class);

  return (
    <input
      className={styleClass}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={updated} />
  );
}

export default Input;
