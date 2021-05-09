import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import classes from './Root.module.scss';

const Root = ( props ) => {
  const navigateHome = () => {
    props.history.push('/');
  }

  return (
    <Fragment>
      <header className={classes.Header}>
        <h3 onClick={navigateHome}>Workout Tracker</h3>
      </header>

      <div className={classes.Content}>
        {props.children}
      </div>
    </Fragment>
  );
}

export default withRouter(Root);
