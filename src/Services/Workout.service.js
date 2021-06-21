import HttpService from './Http.service';

const http = new HttpService();

const get = async () => {
  return await http.get('workouts');
}

const addWorkout = async (workout) => {
  return await http.post('workouts', workout);
}

const updateWorkout = async (workout) => {
  return await http.put(`workouts/${workout.id}`, workout);
}

const deleteWorkout = async (id) => {
  return await http.delete(`workouts/${id}`);
}

export const WorkoutService = {
  get,
  addWorkout,
  updateWorkout,
  deleteWorkout
};
