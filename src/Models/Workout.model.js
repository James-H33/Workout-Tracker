import { ExerciseModel } from './Exercise.model';

export class WorkoutModel {
  id = null;
  title = '';
  exercises = [];

  constructor(data) {
    const defaults = {
      id: null,
      title: '',
      exercises: [],
      history: [],
      ...data
    }

    this.id = defaults.id;
    this.title = defaults.title;
    this.exercises = defaults.exercises.map(x => new ExerciseModel(x));
    this.history = defaults.history;
  }
}
