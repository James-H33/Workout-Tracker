import {
  ADD_SET,
  ADD_EXERCISE,
  ADD_WORKOUT,
  DELETE_WORKOUT,
  UPDATE_SET_VALUES,
  NEW_STATE,
  STORE_STATE,
  UPDATE_WORKOUT,
  UPDATE_WORKOUTS,
  BACKDROP
} from '../Actions'

import { ExerciseModel, SetModel, WorkoutModel } from '../Models';
import { LOGGED_IN, ADD_HISTORY, UPDATE_HISTORY } from '../Actions/Types';

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
      const set = exercise.sets[0] || new SetModel();
      newSet.weight = set.weight;
      newSet.reps = set.reps;
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

const addWorkout = (state, action) => {
  const workouts = [...state.workouts, action.payload];
  return { ...state, workouts };
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

const updateWorkouts = (state, action) => {
  const workouts = action.payload.workouts;

  return { ...state,  workouts };
}

const deleteWorkout = (state, action) => {
  const workouts = action.payload.workouts;
  return { ...state, workouts };
}

const updateBackdrop = (state, action) => {
  return { ...state, isBackdropActive: action.payload.isActive };
}

const updateLoggedInState = (state, action) => {
  const isLoggedIn = action.payload.isLoggedIn;

  return { ...state, isLoggedIn, workouts: [], history: [] };
}

const addHistoryEntry = (state, action) => {
  const newHistoryEntry = action.payload;
  const history = [...state.history, newHistoryEntry];
  return { ...state, history };
}

const updateHistory = (state, action) => {
  const newHistory = action.payload;
  const history = newHistory;
  return { ...state, history };
}

export const workoutReducer = (state, action) => {
  switch (action.type) {
    case ADD_SET:
      return addSet(state, action);
    case ADD_EXERCISE:
      return addExercise(state, action);
    case ADD_WORKOUT:
      return addWorkout(state, action);
    case UPDATE_WORKOUT:
      return updateWorkout(state, action);
    case ADD_HISTORY:
      return addHistoryEntry(state, action);
    case UPDATE_HISTORY:
      return updateHistory(state, action);
    case UPDATE_WORKOUTS:
      return updateWorkouts(state, action);
    case DELETE_WORKOUT:
      return deleteWorkout(state, action);
    case LOGGED_IN:
      return updateLoggedInState(state, action);
    case UPDATE_SET_VALUES:
      return updateSetValues(state, action);
    case NEW_STATE:
    case STORE_STATE:
      return { ...state, ...action.payload }
    case BACKDROP:
      return updateBackdrop(state, action);
    default:
      return state;
  }
}
