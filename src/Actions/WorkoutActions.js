
import { WorkoutService } from '../Services/Workout.service';

import {
  NEW_STATE,
  ADD_WORKOUT,
  UPDATE_WORKOUT,
  UPDATE_WORKOUTS,
  DELETE_WORKOUT
} from './Types';


export const getWorkouts = () => async (dispatch) => {
  const response = await WorkoutService.get();

  dispatch({
    type: NEW_STATE,
    payload: response
  });
}

export const addWorkout = (data) => async (dispatch) => {
  const response = await WorkoutService.addWorkout(data);

  dispatch({
    type: ADD_WORKOUT,
    payload: response
  });

  return Promise.resolve(response.id);
}

export const updateWorkout = (data) => async (dispatch) => {
  const response = await WorkoutService.updateWorkout(data);

  dispatch({
    type: UPDATE_WORKOUT,
    payload: response
  });

  return Promise.resolve(response);
}

export const updateWorkoutById = (data) => async (dispatch) => {
  const response = await WorkoutService.updateWorkout(data);

  dispatch({
    type: UPDATE_WORKOUTS,
    payload: response
  });

  return Promise.resolve(response);
}

export const deleteWorkout = (id) => async (dispatch) => {
  const response = await WorkoutService.deleteWorkout(id);

  dispatch({
    type: DELETE_WORKOUT,
    payload: response
  });

  return Promise.resolve(response);
}


