import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SetContainer from '../../Components/SetContainer/SetContainer';
import Set from '../../Components/SetContainer/Set/Set';
import PillButton from '../../Components/PillButton/PillButton';
import Modal from '../../Components/Modal/Modal';
import Backdrop from '../../Components/Backdrop/Backdrop';
import ExercisePicker from '../../Components/ExercisePicker/ExercisePicker';
import Button from '../../Components/Button/Button';
import classes from './Workout.module.scss';

import { updateWorkoutById } from '../../Actions/WorkoutActions';

import {
  ADD_EXERCISE,
  ADD_SET,
  UPDATE_SET_VALUES
} from '../../Actions';

const Workout = ( props ) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector(s => s);

  const [ localState, setLocaleState ] = useState({ isModalActive: false });
  const id = props.match.params.id;
  const workout = state.workouts.find( w => w.id === id);

  const addExercise = (name) => {
    setLocaleState({ isModalActive: false });
    dispatch({ type: ADD_EXERCISE, payload: { id: workout.id , excercise: name} });
  }

  const addSet = (index) => {
    const action = {
      type: ADD_SET,
      payload: { id: workout.id, exerciseIndex: index  }
    }

    dispatch(action);
  }

  const updateSet = (newSet, setIndex, exerciseIndex) => {
    const action = {
      type: UPDATE_SET_VALUES,
      payload: { id: workout.id, exerciseIndex, setIndex, newSet }
    }

    dispatch(action);
  }

  const removeExercise = async (index) => {
    let exercises = workout.exercises.filter((e, i) => i !== index);
    let updatedWorkout = { ...workout, exercises };
    await dispatch(updateWorkoutById(updatedWorkout));
  }

  const showModal = () => {
    setLocaleState({ isModalActive: !localState.isModalActive });
  }

  const saveWorkout = async () => {
    await dispatch(updateWorkoutById(workout));
    history.push('/');
  }

  const removeSet = async (setIndex, exerciseIndex) => {
    const exercise = workout.exercises[exerciseIndex];
    const newSets = exercise.sets.filter((s, i) => i !== setIndex);
    const newExercise = { ...exercise, sets: newSets };
    const exercises = workout.exercises.map((e, i) => i === exerciseIndex ? newExercise : e);
    const updatedWorkout = { ...workout, exercises };
    await dispatch(updateWorkoutById(updatedWorkout));
  }

  return (
    <div className={classes.Wrapper}>
      <div>
        <Button click={saveWorkout}>Finish</Button>
      </div>

      <h2>{workout ? workout.title : null}</h2>

      <div className={classes.Sets}>
        {
          workout
            ? workout.exercises.map((item, eIndex) =>
              <div key={eIndex}>
                <SetContainer
                  title={item.title}
                  addSet={() => addSet(eIndex)}
                  removeExercise={() => removeExercise(eIndex)}>
                  {
                    item.sets.map((set, setIndex) =>
                      <Set
                        key={setIndex}
                        setIndex={setIndex}
                        set={set}
                        updateSet={(s, setIndex) => updateSet(s, setIndex, eIndex)}
                        removeSet ={() => removeSet(setIndex, eIndex)}
                      />
                    )
                  }
                </SetContainer>
              </div>)
            : null
        }
      </div>

      <div>
        <PillButton variant={'secondary'} click={() => showModal()}>
          Add Exercise
        </PillButton>
      </div>

      <Modal isActive={localState.isModalActive}>
        <div className={classes.ModalContent}>
          <label className={classes.ModalContentTitle}>Pick an Exercise</label>
          <ExercisePicker onExercisePicked={(v) => addExercise(v)} />
        </div>
      </Modal>

      <Backdrop
        isActive={localState.isModalActive}
        onDeactivate={() => showModal()}
      />
    </div>
  );
}

export default withRouter(Workout);
