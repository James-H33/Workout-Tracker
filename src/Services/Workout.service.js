import HttpService from './Http.service';
import { WorkoutModel } from '../Models/Workout.model';

const http = new HttpService();

const get = async () => {
  const response = await http.get('workouts');
  const workouts = response.workouts.map(w => new WorkoutModel(w));
  return { ...response, workouts };
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
