import React, { Fragment, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import WorkoutCardList from '../../Components/WorkoutCardList/WorkoutCardList';
import classes from './Home.module.scss';
import Button from '../../Components/Button/Button';
import { WorkoutContext } from '../../Context/Contexts';
import WorkoutCard from '../../Components/WorkoutCardList/WorkoutCard/WorkoutCard';

const Home = (props) => {
  const { state, dispatch } = useContext(WorkoutContext);
  const router = useHistory();

  const workouts = state.workouts;

  const onDelete = (index) => {
    dispatch({ type: 'DeleteWorkout', payload: { index } });
  }


  const startWorkout = () => {
    dispatch({ type: 'AddWorkout' });
    router.push(`/workout/534`);
  }

  return (
    <Fragment>
      <h2>Workout Tracker</h2>
      <div className={classes.StartCTA}>
        <Button click={startWorkout}>
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
    </Fragment>
  );
}

export default Home;
