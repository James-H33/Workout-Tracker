import React, { Component, Fragment } from 'react';
import classes from './Root.module.scss';

class Root extends Component {

  render() {
    return (
      <Fragment>
        {/* <header>
          <h2>Workouts</h2>
        </header> */}

        <div className={classes.Content}>
          {this.props.children}
        </div>
      </Fragment>
    );
  }

}

export default Root;
