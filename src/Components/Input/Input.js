import React from 'react';
import classes from './Input.module.scss';

const Input = ( props ) => {
  const updated = () => {
    console.log('Changed has happened!');
  }

  return (
    <input className={classes.Input} type="text" value={props.value} onChange={updated} />
  );
}

export default Input;
