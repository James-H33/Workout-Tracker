import React, { useState } from 'react';
import Input from '../../Input/Input';
import { SetModel } from '../../../Models';
import classes from './Set.module.scss';

const Set = ( props ) => {
  const [ localState, setLocalState ] = useState({
    touchStartPos: 0,
    touchPos: 0,
    touchEndPos: 0,
    distanceMoved: 0
  });

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
    setLocalState({ ...localState, touchStartPos: x });
  }

  const touchMove = (e) => {
    const touchEvent = e.touches[0];
    let x = touchEvent.clientX;
    const distance = Math.abs(localState.touchStartPos) - Math.abs(x);
    setLocalState({ ...localState, distanceMoved: distance });
  }

  const touchEnded = async () => {
    if (localState.distanceMoved > 200) {
      console.log('Remove the Set');
      await props.removeSet();
      setLocalState({ ...localState, distanceMoved: 0 });
    } else {
      animateSetBackToStartPos();
    }
  }

  const move = () => {
    if (localState.distanceMoved >= 0) {
      let nextDistance = localState.distanceMoved -= 5;
      setLocalState({ ...localState, distanceMoved: nextDistance < 0 ? 0 : nextDistance });
      requestAnimationFrame(move);
    }
  }

  const animateSetBackToStartPos = () => {
    requestAnimationFrame(move);
  }

  const inlineStyle = {'transform': `translateX(-${localState.distanceMoved}px)`};

  return (
    <div className={classes.SetItem}
      onTouchStart={touchStarted}
      onTouchEnd={touchEnded}
      onTouchMove={touchMove}
      style={inlineStyle}>
      <div className={classes.SetItemDelete}>
        <span>Deleting...</span>
      </div>
      <div>{props.setIndex + 1}</div>
      <div><Input class="SetInput" type="number" value={props.set.weight} updated={onWeightChanged} /></div>
      <div><Input class="SetInput" type="number" value={props.set.reps} updated={onRepsChanged} /></div>
      <div><input class="SetInput" type="checkbox" /></div>
    </div>
  );
}

export default Set;
