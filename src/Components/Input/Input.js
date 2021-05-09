import React from 'react';
import classes from './Input.module.scss';

const Input = ( props ) => {
  const updated = (e) => {
    console.log('Changed has happened!');
    props.updated(e);
  }

  return (
    <input
      className={classes.Input}
      type={props.type}
      value={props.value}
      onChange={updated} />
  );
}

export default Input;
