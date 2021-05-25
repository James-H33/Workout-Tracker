import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import SetContainer from '../../Components/SetContainer/SetContainer';
import Set from '../../Components/SetContainer/Set/Set';
import PillButton from '../../Components/PillButton/PillButton';
import Modal from '../../Components/Modal/Modal';
import Backdrop from '../../Components/Backdrop/Backdrop';
import ExercisePicker from '../../Components/ExercisePicker/ExercisePicker';
import classes from './Workout.module.scss';

import {
  ADD_EXERCISE,
  ADD_SET,
  UPDATE_SET_VALUES,
  STORE_STATE
} from '../../Actions';

const Workout = ( props ) => {
  const dispatch = useDispatch();
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

  const showModal = () => {
    setLocaleState({ isModalActive: !localState.isModalActive });
  }

  useEffect(() => {
    return () => {
      dispatch({ type: STORE_STATE });
    }
  }, [dispatch])

  return (
    <div className={classes.Wrapper}>
      <div>
        Start / Finish
      </div>

      <h2>{workout ? workout.title : null}</h2>

      <div className={classes.Sets}>
        {
          workout
            ? workout.exercises.map((item, eIndex) =>
              <div key={eIndex}>
                <SetContainer title={item.title} addSet={() => addSet(eIndex)}>
                  {
                    item.sets.map((set, setIndex) =>
                      <Set
                        key={setIndex}
                        setIndex={setIndex}
                        set={set}
                        updateSet={(s, setIndex) => updateSet(s, setIndex, eIndex)}
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
