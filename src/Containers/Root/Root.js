import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { withRouter } from 'react-router';
import classes from './Root.module.scss';

import { getWorkouts } from '../../Actions/WorkoutActions';
import Backdrop from '../../Components/Backdrop/Backdrop';

import { BACKDROP } from '../../Actions/Types';
import Header from '../../Components/Header/Header';

const Root = ( props ) => {
  const dispatch = useDispatch();
  const state = useSelector(s => s);

  const deactivateBackdrop = () => {
    dispatch({ type: BACKDROP, payload: { isActive: false } });
  }

  useEffect(() => {
    if (state.isLoggedIn) {
      dispatch(getWorkouts());
    }
  }, [state.isLoggedIn, dispatch]);

  return (
    <Fragment>
     <Header />

      <div className={classes.Content}>
        {props.children}
      </div>

      <Backdrop
        isActive={state.isBackdropActive}
        onDeactivate={() => deactivateBackdrop()}
      />
    </Fragment>
  );
}

export default withRouter(Root);
