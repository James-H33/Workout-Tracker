import React, { Fragment } from 'react';

const Set = ( props ) => {
  return (
    <Fragment>
      <div>{props.setNum}</div>
      <div>{props.set.weight}</div>
      <div>{props.set.reps}</div>
      <div><input type="checkbox" /></div>
    </Fragment>
  );
}

export default Set;
