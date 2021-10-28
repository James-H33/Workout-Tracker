import React, { Fragment, useState, useEffect } from 'react';
import classes from './SetContainer.module.scss';
import Expander from '../Expander/Expander';
import { useDispatch, useSelector } from 'react-redux';
import { BACKDROP } from '../../Actions/Types';

const SetContainer = ( props ) => {
  const [ localState, setLocaleState ] = useState({ isExpanderActive: false });
  const dispatch = useDispatch();
  const state = useSelector(s => s);

  const onToggleExander = () => {
    const isActive = localState.isExpanderActive;
    dispatch({ type: BACKDROP, payload: { isActive: true } });
    setLocaleState({ isExpanderActive: !isActive });
  }

  const removeExercise = async () => {
    await props.removeExercise();
    dispatch({ type: BACKDROP, payload: { isExpanderActive: false}})
  }

  useEffect(() => {
    if (!state.isBackdropActive) {
      setLocaleState({ isExpanderActive: false });
    }
  }, [state.isBackdropActive]);

  return (
    <Fragment>
      <div className={classes.TitleWrapper}>
        <h4 className={classes.Title}>
          {props.title}
        </h4>

        <Expander open={onToggleExander} isActive={localState.isExpanderActive}>
          <span onClick={removeExercise}>Remove</span>
        </Expander>
      </div>

      <div className={classes.SetWrapper}>
        <div className={classes.SetHeaders}>
          <div>Set</div>
          <div>lbs</div>
          <div>Reps</div>
          <div><input type="checkbox" checked disabled /></div>
        </div>

        <div className={classes.Exercises}>
          {props.children}
        </div>
      </div>

      <div className={classes.AddSetBtn} onClick={props.addSet}>
        <span>Add Set</span>
      </div>
    </Fragment>
  );
}

export default SetContainer;
