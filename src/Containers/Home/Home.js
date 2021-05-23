import React, { Fragment, useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import WorkoutCardList from '../../Components/WorkoutCardList/WorkoutCardList';
import classes from './Home.module.scss';
import Button from '../../Components/Button/Button';
import { WorkoutContext } from '../../Context/Contexts';
import WorkoutCard from '../../Components/WorkoutCardList/WorkoutCard/WorkoutCard';
import Modal from '../../Components/Modal/Modal';
import Backdrop from '../../Components/Backdrop/Backdrop';
import Input from '../../Components/Input/Input';

const Home = (props) => {
  const { state, dispatch } = useContext(WorkoutContext);

  const [ localState, setLocaleState ] = useState({
    isModalActive: false,
    workoutTitle: ''
  });

  const [ workoutId, setWorkoutId ] = useState(null);
  const router = useHistory();
  const workouts = state.workouts;

  useEffect(() => {
    if (workoutId) {
      router.push(`/workout/${workoutId}`);
    }
  }, [workoutId, router]);

  const onDelete = (index) => {
    dispatch({ type: 'DeleteWorkout', payload: { index } });
  }

  const showModal = () => {
    setLocaleState({ ...localState,isModalActive: !localState.isModalActive });
  }

  const updateWorkoutTitle = (e) => {
    const value = e.target.value;

    setLocaleState({ ...localState, workoutTitle: value });
  }

  const startWorkout = () => {
    dispatch({
      type: 'AddWorkout',
      payload: { title: localState.workoutTitle, cb: setWorkoutId }
    });
  }

  return (
    <Fragment>
      <h2>Workout Tracker</h2>
      <div className={classes.StartCTA}>
        <Button click={showModal}>
          Start New Workout
        </Button>
      </div>
      <div className={classes.WorkoutSection}>
        <h3>Workouts</h3>
        <WorkoutCardList>
          {workouts.map((a, i) => {
              return (
                <WorkoutCard
                  key={a.id}
                  id={a.id}
                  title={a.title}
                  exercises={a.exercises}
                  delete={() => onDelete(i)} />
              )
            })}
        </WorkoutCardList>
      </div>

      <Modal isActive={localState.isModalActive}>
        <div className={classes.AddWorkout}>
          <h4>Name your workout: </h4>
          <Input
            value={localState.workoutTitle}
            updated={updateWorkoutTitle} />

          <Button click={startWorkout}>
            Start
          </Button>
        </div>
      </Modal>

      <Backdrop
        isActive={localState.isModalActive}
        onDeactivate={() => showModal()}
      />
    </Fragment>
  );
}

export default Home;
