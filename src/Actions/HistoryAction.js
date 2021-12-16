import { HistoryService } from '../Services/History.service';

import {
  ADD_HISTORY
} from './Types';


export const addHistory = (data) => async (dispatch) => {
  const response = await HistoryService.addHistory(data);

  dispatch({
    type: ADD_HISTORY,
    payload: response
  });
}
