import React, { Component, Fragment } from 'react';
import WorkoutCardList from '../../Components/WorkoutCardList/WorkoutCardList';
import classes from './Home.module.scss';
import Button from '../../Components/Button/Button';

class Home extends Component {
  state = {
    workouts: [
      {title: 'Workout 1'},
      {title: 'Workout 2'},
    ]
  }

  onDelete = (index) => {
    const workouts = this.state.workouts.filter((_, i) => i !== index);
    this.setState({ workouts });
  }

  render() {
    return (
      <Fragment>
        <h2>Workout Tracker</h2>
        <div className={classes.StartCTA}>
          <Button>Start New Workout</Button>
        </div>
        <div className={classes.WorkoutSection}>
          <h3>Workouts</h3>
          <WorkoutCardList delete={this.onDelete} workouts={this.state.workouts} />
        </div>
      </Fragment>
    );
  }

}

export default Home;
