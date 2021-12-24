import React, { useState, useRef } from 'react';
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
import { convertTimeFromDates } from '../../util/utils';

import Timer from '../../Components/Timer/Timer';
import { addHistory } from '../../Actions/HistoryAction';
import {
  ADD_EXERCISE,
  ADD_SET,
  UPDATE_SET_VALUES
} from '../../Actions';

const Workout = ( props ) => {
  const dispatch = useDispatch();
  const router = useHistory();
  const state = useSelector(s => s);
  const timeRef = useRef();
  const [ exerciseModalState, setExerciseStateModal ] = useState(false);
  const [ isFinishedModalState, setIsFinishedModalState ] = useState(false);

  const id = props.match.params.id;
  const workout = state.workouts.find( w => w.id === id);

  const addExercise = (name) => {
    setExerciseStateModal(false);
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

  const showExerciseModal = () => {
    setExerciseStateModal(!exerciseModalState);
  }

  const saveWorkout = async () => {
    const history = {
      workoutId: workout.id,
      userId: state.userId,
      date: new Date().toUTCString(),
      duration: convertTimeFromDates(timeRef.current)
    }

    await dispatch(updateWorkoutById(workout));
    await dispatch(addHistory(history));

    router.push('/');
  }

  const cancelWorkout = () => {
    router.push('/');
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
      <div className={classes.Header}>
        <Button click={() => setIsFinishedModalState(true)}>Finish</Button>
        <Timer timeRef={timeRef} />
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
        <PillButton variant={'secondary'} click={() => showExerciseModal()}>
          Add Exercise
        </PillButton>
      </div>

      <Modal isActive={exerciseModalState}>
        <div className={classes.ModalContent}>
          <label className={classes.ModalContentTitle}>Pick an Exercise</label>
          <ExercisePicker onExercisePicked={(v) => addExercise(v)} />
        </div>
      </Modal>

      <Modal isActive={isFinishedModalState}>
        <div className={classes.ModalContent}>
          <label className={classes.FinishModalTitle}>Complete workout? or Cancel?</label>
          <div className={classes.FinishModalActions}>
            <Button click={saveWorkout}>Complete</Button>
            <Button styleType={1} click={cancelWorkout}>Cancel</Button>
          </div>
        </div>
      </Modal>

      <Backdrop
        isActive={exerciseModalState}
        onDeactivate={() => setExerciseStateModal(false)}
      />

      <Backdrop
        isActive={isFinishedModalState}
        onDeactivate={() => setIsFinishedModalState(false)}
      />
    </div>
  );
}

export default withRouter(Workout);
