import React from 'react';
import { useHistory } from "react-router-dom";
import classes from './WorkoutCard.module.scss';

import Expander from '../../Expander/Expander';

const WorkoutCard = (props) => {
  const history = useHistory();

  const navigate = () => {
    history.push(`/workout/${props.id}`);
  }

  return (
    <div className={classes.Wrapper} onClick={navigate}>

      <div className={classes.Expander}>
        <Expander delete={props.delete} />
      </div>

      <label>{props.title}</label>

      <ul>
        {props.exercises.map((e, i) => <li key={e.id}>{e.title}</li>)}
      </ul>
    </div>
  );
}

export default WorkoutCard;
