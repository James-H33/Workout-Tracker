import { HistoryService } from '../Services/History.service';

import {
  ADD_HISTORY,
  UPDATE_HISTORY
} from './Types';


export const addHistory = (data) => async (dispatch) => {
  const response = await HistoryService.addHistory(data);

  dispatch({
    type: ADD_HISTORY,
    payload: response
  });
}

export const getHistoryForWorkout = (workoutId) => async (dispatch) => {
  const response = await HistoryService.getHistory(workoutId);

  dispatch({
    type: UPDATE_HISTORY,
    payload: response
  });
}
