import React, { Fragment, useContext } from 'react';
import Set from './Set/Set';
import { WorkoutContext } from '../../Context/Contexts';
import classes from './SetContainer.module.scss';

const SetContainer = ( props ) => {
  const { dispatch } = useContext(WorkoutContext);

  const addSet = () => {
    const action = {
      type: 'AddSet',
      payload: { id: 1, exerciseIndex: 0 }
    }

    dispatch(action);
  }

  return (
    <Fragment>
      <h4 className={classes.Title}>{props.title}</h4>

      <div className={classes.SetWrapper}>
        <div className={classes.SetHeaders}>
          <div>Set</div>
          <div>lbs</div>
          <div>Reps</div>
          <div><input type="checkbox" checked disabled /></div>
        </div>
        <div className={classes.Exercises}>
          { props.sets.map((set, index) => <Set key={index} setIndex={index} set={set} />)}
        </div>
      </div>

      <div className={classes.AddSetBtn} onClick={addSet}>
        <span>Add Set</span>
      </div>
    </Fragment>
  );
}

export default SetContainer;
