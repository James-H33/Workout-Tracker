import { SetModel } from './Set.model';
import { makeGuid } from '../util/utils';

export class ExerciseModel {
  id = '';
  title = '';
  sets = [];

  constructor(data) {
    const defaults = {
      id: makeGuid(),
      title: '',
      sets: [],
      ...data
    }

    this.id = defaults.id;
    this.title = defaults.title;
    this.sets = defaults.sets.map(x => new SetModel(x));
  }
}
