
import { ExerciseModel, SetModel, WorkoutModel } from '../Models';
import { makeGuid } from '../util/utils';

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

const addWorkout = (state, action) => {
  const { title, cb } = action.payload;

  const id = makeGuid();
  const workouts = [...state.workouts, new WorkoutModel({ id, title })];
  cb(id);
  return updateStore({ ...state, workouts });
}

const deleteWorkout = (state, action) => {
  const workouts = state.workouts.filter((x, i) => i !== action.payload.index);
  return updateStore({ ...state, workouts });
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'AddSet':
      return addSet(state, action);
    case 'AddExercise':
      return addExercise(state, action);
    case 'AddWorkout':
      return addWorkout(state, action);
    case 'DeleteWorkout':
      return deleteWorkout(state, action);
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
