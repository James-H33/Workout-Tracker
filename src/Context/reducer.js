
import { ExerciseModel, SetModel, WorkoutModel } from '../Models';

const addExercise = (state, action) => {
  const workouts = state.workouts.map(x => {
    if (x.id === action.payload.id) {
      x = {
        ...x,
        exercises: [
          ...x.exercises,
          new ExerciseModel({ title: action.payload.excercise, sets: [new SetModel()] })
        ]
      }
    }

    return x;
  });

  return { ...state, workouts };
}

const addSet = (state, action) => {
  const workouts = state.workouts.map(x => {
    const e = new WorkoutModel(x);

    if (e.id === action.payload.id) {
      const newSet = new SetModel();
      const exercise = e.exercises[action.payload.exerciseIndex];
      newSet.weight = exercise.sets[0].weight;
      newSet.reps = exercise.sets[0].reps;
      exercise.sets = [...exercise.sets, newSet];
    }

    return e;
  });

  return { ...state,  workouts };
}

const updateSetValues = (state, action) => {
  const { exerciseIndex, setIndex, newSet } = action.payload;

  const workouts = state.workouts.map(x => {
    const e = new WorkoutModel(x);

    if (e.id === action.payload.id) {
      const exercise = e.exercises[exerciseIndex];
      exercise.sets[setIndex] = newSet;
    }

    return e;
  });

  return { ...state, workouts }
}

const updateStore = (state, action) => {
  localStorage.setItem('workout-tracker-state', JSON.stringify(state));
  return state;
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'AddSet':
      return addSet(state, action);
    case 'AddExercise':
      return addExercise(state, action);
    case 'UpdateSetValues':
      return updateSetValues(state, action);
    case 'NewState':
      return { ...state, ...action.payload }
    case 'StoreState':
      return updateStore(state, action);
    default:
      return state;
  }
}


export default reducer;
