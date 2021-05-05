import { SetModel } from './Set.model';

export class ExerciseModel {
  title = '';
  sets = [];

  constructor(data) {
    const defaults = {
      title: '',
      sets: [],
      ...data
    }

    this.title = defaults.title;
    this.sets = defaults.sets.map(x => new SetModel(x));
  }
}
