import {
  ADD_SET,
  ADD_EXERCISE,
  ADD_WORKOUT,
  DELETE_WORKOUT,
  UPDATE_SET_VALUES,
  NEW_STATE,
  STORE_STATE,
  UPDATE_WORKOUT
} from '../Actions'

import { ExerciseModel, SetModel, WorkoutModel } from '../Models';

const addExercise = (state, action) => {
  const workouts = state.workouts.map(x => {
    if (x.id === action.payload.id) {
      x = {
        ...x,
        exercises: [
          ...x.exercises,
          new ExerciseModel({ title: action.payload.excercise, sets: [new SetModel()] })
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

const updateSetValues = (state, action) => {
  const { exerciseIndex, setIndex, newSet } = action.payload;

  const workouts = state.workouts.map(x => {
    const e = new WorkoutModel(x);

    if (e.id === action.payload.id) {
      const exercise = e.exercises[exerciseIndex];
      exercise.sets[setIndex] = newSet;
    }

    return e;
  });

  return { ...state, workouts }
}

const updateStore = (state, action) => {
  localStorage.setItem('workout-tracker-state', JSON.stringify(state));
  return state;
}

const addWorkout = (state, action) => {
  const workouts = [...state.workouts, action.payload];
  return updateStore({ ...state, workouts });
}

const updateWorkout = (state, action) => {
  const workouts = state.workouts.map(w => {

    if (w.id === action.payload.id) {
      return action.payload;
    }

    return w;
  });

  return { ...state,  workouts };
}

const deleteWorkout = (state, action) => {
  const workouts = action.payload.workouts;
  return updateStore({ ...state, workouts });
}

const initialState = {};

export const workoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SET:
      return addSet(state, action);
    case ADD_EXERCISE:
      return addExercise(state, action);
    case ADD_WORKOUT:
      return addWorkout(state, action);
    case UPDATE_WORKOUT:
      return updateWorkout(state, action);
    case DELETE_WORKOUT:
      return deleteWorkout(state, action);
    case UPDATE_SET_VALUES:
      return updateSetValues(state, action);
    case NEW_STATE:
      return { ...state, ...action.payload }
    case STORE_STATE:
      return updateStore(state, action);
    default:
      return state;
  }
}
