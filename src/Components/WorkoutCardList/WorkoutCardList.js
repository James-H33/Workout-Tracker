import React, { Component } from 'react';
import classes from './WorkoutCardList.module.scss';
import WorkoutCard from './WorkoutCard/WorkoutCard';

class WorkoutCardList extends Component {
  render() {
    return (
      <div className={classes.Wrapper}>
        {
          this.props.workouts.map((a, i) => {
            return (
              <WorkoutCard
                key={a.title}
                id={i + 1}
                title={a.title}
                exercises={a.exercises}
                delete={() => this.props.delete(i)} />
            )
          })
        }
      </div>
    );
  }
}

export default WorkoutCardList;
