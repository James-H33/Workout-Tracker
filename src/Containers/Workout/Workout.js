import React, { Component } from 'react';
import SetContainer from '../../Components/SetContainer/SetContainer';
import classes from './Workout.module.scss';

class Workout extends Component {
  state = {
    title: 'Lower Body 1',
    setItems: [
      {
        title: 'Barbel Squat',
        sets: [
          { weight: 50, reps: 8, isComplete: false },
          { weight: 50, reps: 8, isComplete: false }
        ]
      },
      {
        title: 'Leg Curl',
        sets: [
          { weight: 105, reps: 8, isComplete: false },
          { weight: 105, reps: 8, isComplete: false }
        ]
      },
    ],
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <div>
          Start / Finish
        </div>

        <h2>{this.state.title}</h2>

        <div className={classes.Sets}>
          { this.state.setItems.map((item, index) => <div key={index}><SetContainer title={item.title} sets={item.sets} /></div>) }
        </div>
      </div>
    );
  }
}

export default Workout;
