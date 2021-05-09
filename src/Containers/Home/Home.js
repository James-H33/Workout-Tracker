import React, { Fragment, useContext } from 'react';
import WorkoutCardList from '../../Components/WorkoutCardList/WorkoutCardList';
import classes from './Home.module.scss';
import Button from '../../Components/Button/Button';
import { WorkoutContext } from '../../Context/Contexts';

const Home = () => {
  const { state } = useContext(WorkoutContext);

  const workouts = state.workouts;

  const onDelete = (index) => {
    // const workouts = this.state.workouts.filter((_, i) => i !== index);
    // this.setState({ workouts });
  }

  return (
    <Fragment>
      <h2>Workout Tracker</h2>
      <div className={classes.StartCTA}>
        <Button>Start New Workout</Button>
      </div>
      <div className={classes.WorkoutSection}>
        <h3>Workouts</h3>
        <WorkoutCardList delete={onDelete} workouts={workouts} />
      </div>
    </Fragment>
  );
}

export default Home;
