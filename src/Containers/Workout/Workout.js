import React, { useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import SetContainer from '../../Components/SetContainer/SetContainer';
import Set from '../../Components/SetContainer/Set/Set';
import { WorkoutContext } from '../../Context/Contexts';
import PillButton from '../../Components/PillButton/PillButton';
import Modal from '../../Components/Modal/Modal';
import Backdrop from '../../Components/Backdrop/Backdrop';
import ExercisePicker from '../../Components/ExercisePicker/ExercisePicker';
import classes from './Workout.module.scss';

const Workout = ( props ) => {
  const { state, dispatch } = useContext(WorkoutContext);
  const [ localState, setLocaleState ] = useState({ isModalActive: false });
  const id = props.match.params.id;
  const workout = state.workouts.find( w => w.id === id);

  const addExercise = (name) => {
    setLocaleState({ isModalActive: false });
    dispatch({ type: 'AddExercise', payload: { id: workout.id , excercise: name} });
  }

  const addSet = (index) => {
    const action = {
      type: 'AddSet',
      payload: { id: workout.id, exerciseIndex: index  }
    }

    dispatch(action);
  }

  const updateSet = (newSet, setIndex, exerciseIndex) => {
    const action = {
      type: 'UpdateSetValues',
      payload: { id: workout.id, exerciseIndex, setIndex, newSet }
    }

    dispatch(action);
  }

  const showModal = () => {
    setLocaleState({ isModalActive: !localState.isModalActive });
  }

  useEffect(() => {
    return () => {
      dispatch({ type: 'StoreState' });
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
