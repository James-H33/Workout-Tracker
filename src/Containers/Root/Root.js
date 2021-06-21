import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { withRouter } from 'react-router';
import classes from './Root.module.scss';

import { getWorkouts } from '../../Actions/WorkoutActions';
import Backdrop from '../../Components/Backdrop/Backdrop';

let initialState = true;

const Root = ( props ) => {
  const dispatch = useDispatch();
  const state = useSelector(s => s);

  const navigateHome = () => {
    props.history.push('/');
  }

  const fetchWorkouts = async () => {
    dispatch(await getWorkouts());
  }

  useEffect(() => {
    if (initialState) {
      initialState = false;
      fetchWorkouts();
    }
  });

  return (
    <Fragment>
      <header className={classes.Header}>
        <h3 onClick={navigateHome}>Workout Tracker</h3>
      </header>

      <div className={classes.Content}>
        {props.children}
      </div>


      <Backdrop
        isActive={state.isBackdropActive}
        onDeactivate={() => null}
      />
    </Fragment>
  );
}

export default withRouter(Root);
