import React, { Fragment } from 'react';
import { useHistory } from 'react-router';
import classes from './Header.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AuthService } from '../../Services/Auth.service';
import { LOGGED_IN } from '../../Actions/Types';


const Header = () => {
  const state = useSelector(s => s);
  const dispatch = useDispatch();
  const history = useHistory();


  const navigateHome = () => {
    history.push('/');
  }

  const logout = () => {
    AuthService.logout();

    dispatch({
      type: LOGGED_IN,
      payload: { isLoggedIn: false }
    });
  }

  const authenticatedView = () => {
    return (
      <Fragment>
        <h3 onClick={navigateHome}>Workout Tracker</h3>
        <div className={classes.HeaderLogout} onClick={logout}>Logout</div>
      </Fragment>
    );
  }

  const unAuthenticatedView = () => {
    return (
      <h3 onClick={navigateHome}>Workout Tracker</h3>
    );
  }

  const view = state.isLoggedIn ? authenticatedView() : unAuthenticatedView();

  return (
    <header className={classes.Header}>
      {view}
    </header>
  );
}

export default Header;
