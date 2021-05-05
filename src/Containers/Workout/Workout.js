import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import SetContainer from '../../Components/SetContainer/SetContainer';
import { WorkoutContext } from '../../Context/Contexts';
import PillButton from '../../Components/PillButton/PillButton';
import classes from './Workout.module.scss';

const Workout = ( props ) => {
  const { state, dispatch } = useContext(WorkoutContext);
  const id = parseInt(props.match.params.id);
  const workout = state.workouts.find( w => w.id === id) || { title: 'Testing', exercises: [] }

  const addExercise = () => {
    dispatch({ type: 'AddExercise', payload: { id: workout.id } });
  }

  return (
    <div className={classes.Wrapper}>
      <div>
        Start / Finish
      </div>

      <h2>{workout ? workout.title : null}</h2>

      <div className={classes.Sets}>
        { workout ? workout.exercises.map((item, index) => <div key={index}><SetContainer title={item.title} sets={item.sets} /></div>) : null }
      </div>

      <div>
        <PillButton variant={'secondary'} click={() => addExercise()}>
          Add Exercise
        </PillButton>
      </div>
    </div>
  );
}

export default withRouter(Workout);
