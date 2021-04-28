import React from 'react';
import classes from './WorkoutCard.module.scss';

import Expander from '../../Expander/Expander';

const WorkoutCard = (props) => {
  return (
    <div className={classes.Wrapper}>

      <div className={classes.Expander}>
        <Expander delete={props.delete} />
      </div>

      <label>{props.title}</label>

      <ul>
        <li>Squats</li>
        <li>Curls</li>
      </ul>
    </div>
  );
}

export default WorkoutCard;
