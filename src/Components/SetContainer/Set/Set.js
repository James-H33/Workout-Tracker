import React, { Fragment } from 'react';
import Input from '../../Input/Input';

const Set = ( props ) => {
  return (
    <Fragment>
      <div>{props.setIndex + 1}</div>
      <div><Input value={props.set.weight} /></div>
      <div><Input value={props.set.reps} /></div>
      <div><input type="checkbox" /></div>
    </Fragment>
  );
}

export default Set;
