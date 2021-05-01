import React from 'react';
import { useHistory } from "react-router-dom";
import classes from './WorkoutCard.module.scss';

import Expander from '../../Expander/Expander';

const WorkoutCard = (props) => {
  const history = useHistory();

  const navigate = () => {
    console.log(history);
    history.push('/workout/1');
  }

  return (
    <div className={classes.Wrapper} onClick={navigate}>

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
