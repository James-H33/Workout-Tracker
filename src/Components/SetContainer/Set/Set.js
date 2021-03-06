import React, { useState } from 'react';
import Input from '../../Input/Input';
import { SetModel } from '../../../Models';
import classes from './Set.module.scss';
import Checkbox from '../../Checkbox/Checkbox';

const Set = ( props ) => {
  const [ localState, setLocalState ] = useState(() => ({
    touchStartPos: 0,
    touchPos: 0,
    touchEndPos: 0,
    distanceMoved: 0,
    isComplete: false
  }));

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

  const touchStarted = (e) => {
    const touchEvent = e.touches[0];
    let x = touchEvent.clientX;
    setLocalState((s) => ({ ...s, touchStartPos: x }));
  }

  const touchMove = (e) => {
    const touchEvent = e.touches[0];
    let x = touchEvent.clientX;
    const distance = Math.abs(localState.touchStartPos) - Math.abs(x);
    setLocalState((s) => ({ ...s, distanceMoved: distance }))
  }

  const touchEnded = async () => {
    if (localState.distanceMoved > 200) {
      await props.removeSet();
      setLocalState((s) => ({ ...s, distanceMoved: 0 }))
    } else {
      animateSetBackToStartPos();
    }
  }

  const move = () => {
    if (localState.distanceMoved >= 0) {
      let nextDistance = localState.distanceMoved -= 5;
      setLocalState((s) => ({ ...s, distanceMoved: nextDistance < 0 ? 0 : nextDistance }));
      requestAnimationFrame(move);
    }
  }

  const animateSetBackToStartPos = () => {
    requestAnimationFrame(move);
  }

  const onComplete = () => {
    setLocalState((s) => ({ ...s, isComplete: !s.isComplete }));
  }

  const inlineStyle = {'transform': `translateX(-${localState.distanceMoved}px)`};
  const classStyle = localState.isComplete ?
    classes.SetItemComplete : classes.SetItem;

  return (
    <div
      className={classStyle}
      onTouchStart={touchStarted}
      onTouchEnd={touchEnded}
      onTouchMove={touchMove}
      style={inlineStyle}
    >
      <div className={classes.SetItemDelete}>
        <span>Deleting...</span>
      </div>

      <div className={classes.SetItemNum}>{props.setIndex + 1}</div>

      <div>
        <Input
          styleclass={'SetInput'}
          type="number"
          value={props.set.weight}
          updated={onWeightChanged}
          disabled={localState.isComplete}
        />
      </div>

      <div>
        <Input
          styleclass={'SetInput'}
          type="number"
          value={props.set.reps}
          updated={onRepsChanged}
          disabled={localState.isComplete}
        />
      </div>

      <div>
        <Checkbox changed={onComplete} checked={localState.isComplete} />
        {/* <input
          className='SetInput'
          type="checkbox"
          onChange={onComplete}
          checked={localState.isComplete}
        /> */}
      </div>
    </div>
  );
}

export default Set;
