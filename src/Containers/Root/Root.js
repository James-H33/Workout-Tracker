import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import classes from './Root.module.scss';
import { WorkoutContext } from '../../Context/Contexts';
import { WorkoutModel, SetModel, ExerciseModel } from '../../Models';

const addExercise = (state, action) => {
  const workouts = state.workouts.map(x => {
    if (x.id === action.payload.id) {
      x = {
        ...x,
        exercises: [
          ...x.exercises,
          new ExerciseModel({ title: 'Lat Pulls', sets: [new SetModel()] })
        ]
      }
    }

    return x;
  });

  return { ...state, workouts };
}

const addSet = (state, action) => {
  const workouts = state.workouts.map(x => {
    const e = new WorkoutModel(x);

    if (e.id === action.payload.id) {
      const newSet = new SetModel();
      const exercise = e.exercises[action.payload.exerciseIndex];
      newSet.weight = exercise.sets[0].weight;
      newSet.reps = exercise.sets[0].reps;
      exercise.sets = [...exercise.sets, newSet];
    }

    return e;
  });

  return { ...state,  workouts };
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'AddSet':
      return addSet(state, action);
    case 'AddExercise':
      return addExercise(state, action);
    default:
      return state;
  }
}

const Root = ( props ) => {

  const initialState = {
    workouts: [
      {
        id: 1,
        title: 'Lower Body 1',
        exercises: [
          {
            title: 'Barbel Squat',
            sets: [
              { weight: 50, reps: 8, isComplete: false },
              { weight: 50, reps: 8, isComplete: false }
            ]
          },
          {
            title: 'Leg Curl',
            sets: [
              { weight: 105, reps: 8, isComplete: false },
              { weight: 105, reps: 8, isComplete: false }
            ]
          },
        ],
      }
    ]
  }

  const navigateHome = () => {
    props.history.push('/');
  }

  const [ state, dispatch ] = React.useReducer(reducer, initialState);

  return (
    <Fragment>
      <header className={classes.Header}>
        <h3 onClick={navigateHome}>Workout Tracker</h3>
      </header>

      <WorkoutContext.Provider value={{ state, dispatch }}>
        <div className={classes.Content}>
          {props.children}
        </div>
      </WorkoutContext.Provider>
    </Fragment>
  );
}

export default withRouter(Root);
