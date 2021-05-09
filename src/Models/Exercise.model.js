import { SetModel } from './Set.model';

export class ExerciseModel {
  id = '';
  title = '';
  sets = [];

  constructor(data) {
    const defaults = {
      id: '',
      title: '',
      sets: [],
      ...data
    }

    this.id = defaults.id;
    this.title = defaults.title;
    this.sets = defaults.sets.map(x => new SetModel(x));
  }
}
