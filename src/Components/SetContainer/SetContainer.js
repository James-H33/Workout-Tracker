import React, { Fragment } from 'react';
import Set from './Set/Set';
import classes from './SetContainer.module.scss';

const SetContainer = ( props ) => {
  return (
    <Fragment>
      <h4>{props.title}</h4>

      <div className={classes.SetWrapper}>
        <div className={classes.SetHeaders}>
          <div>Set</div>
          <div>lbs</div>
          <div>Reps</div>
          <div><input type="checkbox" checked disabled /></div>
        </div>
        <div className={classes.SetItems}>
          { props.sets.map((set, index) => <Set key={index} setNum={index + 1} set={set} />)}
        </div>
      </div>

      <div> Add Set</div>
    </Fragment>
  );
}

export default SetContainer;
