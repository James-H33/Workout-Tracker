import React, { Component } from 'react';
import classes from './WorkoutCardList.module.scss';

class WorkoutCardList extends Component {
  render() {
    return (
      <div className={classes.Wrapper}>
        {this.props.children}
      </div>
    );
  }
}

export default WorkoutCardList;
