export class SetModel {
  weight = 0;
  reps = 0;
  isComplete = false;

  constructor(data) {
    const defaults = {
      weight: 0,
      reps: 0,
      isComplete: false,
      ...data
    }

    this.weight = defaults.weight;
    this.reps = defaults.reps;
    this.isComplete = defaults.isComplete;
  }
}
