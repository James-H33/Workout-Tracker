import HttpService from './Http.service.js';

const http = new HttpService();

const addHistory = async (history) => {
  return await http.post('history', history);
}

export const HistoryService = {
  addHistory
};
