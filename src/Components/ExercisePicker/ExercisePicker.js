import React from 'react';
import classes from './ExercisePicker.module.scss';
import e from '../../data/exersices';

e.sort((a, b) => a.title.localeCompare(b.title));

const ExercisePicker = ( props ) => {
  const exercises = e;

  const view = exercises.map((e, i) => {
    return (
      <div className={classes.ExercisePickerOption} key={e.id} onClick={() => props.onExercisePicked(e.title)}>
        <img src={e.image} alt={e.title} />
        <label>{e.title}</label>
      </div>
    );
  });

  return (
    <div className={classes.ExercisePicker}>
      {view}
    </div>
  );
}

export default ExercisePicker;
