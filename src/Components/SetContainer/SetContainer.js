import React, { Fragment } from 'react';
import classes from './SetContainer.module.scss';

const SetContainer = ( props ) => {
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
