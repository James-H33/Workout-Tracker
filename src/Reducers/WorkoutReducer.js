import {
  ADD_SET,
  ADD_EXERCISE,
  ADD_WORKOUT,
  DELETE_WORKOUT,
  UPDATE_SET_VALUES,
  NEW_STATE,
  STORE_STATE
} from '../Actions'

import { ExerciseModel, SetModel, WorkoutModel } from '../Models';
import { makeGuid } from '../util/utils';

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
  const { title, cb } = action.payload;

  const id = makeGuid();
  const workouts = [...state.workouts, new WorkoutModel({ id, title })];
  cb(id);
  return updateStore({ ...state, workouts });
}

const deleteWorkout = (state, action) => {
  const workouts = state.workouts.filter((x, i) => i !== action.payload.index);
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
