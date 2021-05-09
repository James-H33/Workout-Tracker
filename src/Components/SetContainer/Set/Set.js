import React, { Fragment } from 'react';
import Input from '../../Input/Input';
import { SetModel } from '../../../Models';

const Set = ( props ) => {
  const onValueChange = (e, prop) => {
    const value = parseInt(e.target.value);
    const newSet = new SetModel({ ...props.set, [prop]: value });

    props.updateSet(newSet, props.setIndex);
  }

  const onWeightChanged = (e) => {
    onValueChange(e, 'weight');
  }

  const onRepsChanged = (e) => {
    onValueChange(e, 'reps');
  }

  return (
    <Fragment>
      <div>{props.setIndex + 1}</div>
      <div><Input type="number" value={props.set.weight} updated={onWeightChanged} /></div>
      <div><Input type="number" value={props.set.reps} updated={onRepsChanged} /></div>
      <div><input type="checkbox" /></div>
    </Fragment>
  );
}

export default Set;
