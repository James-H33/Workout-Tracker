import React from 'react';
import classes from './ExercisePicker.module.scss';
import Dumbell from '../../Assets/dumbell.png';

const ExercisePicker = ( props ) => {
  const exercises = [
    {
      id: '123',
      title: 'Pull Ups',
      image: Dumbell
    },
    {
      id: '567',
      title: 'Chest Press',
      image: Dumbell
    },
    {
      id: '789',
      title: 'Barbel Squat',
      image: Dumbell
    },
    {
      id: '098',
      title: 'Incline Press',
      image: Dumbell
    }
  ];

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
