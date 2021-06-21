import React from 'react';
import classes from './Input.module.scss';

const Input = ( props ) => {
  const updated = (e) => {
    props.updated(e);
  }

  return (
    <input
      className={classes.Input}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={updated} />
  );
}

export default Input;
