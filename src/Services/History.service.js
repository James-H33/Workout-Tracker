import HttpService from './Http.service.js';

const http = new HttpService();

const addHistory = async (history) => {
  return http.post('history', history);
}

const getHistory = async (id) => {
  return http.get(`history/${id}`);
}

export const HistoryService = {
  addHistory,
  getHistory
};
