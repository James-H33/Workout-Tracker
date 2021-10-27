import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import classes from './LoginForm.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';

import { AuthService } from '../../Services/Auth.service';
import { LOGGED_IN } from '../../Actions/Types';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const [ state, setState ] = useState({
    username: '',
    password: ''
  });

  const [ errState, setErrState ] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const onValueChange = (e, prop) => {
    const value = e.target.value;
    const newState = { ...state, [prop]: value };

    setState(newState);
  }

  const loginRequest = async () => {
    const response = await AuthService.login(state);

    if (response.success) {
      dispatch({
        type: LOGGED_IN,
        payload: { isLoggedIn: true }
      });

      history.push('/');
    } else {
      setErrState(response.message);
    }
  }

  return (
    <div className={classes.LoginForm}>
      <h3>Login</h3>

      <div className={classes.FormInput}>
        <label htmlFor="username">Username</label>

        <Input
          id="username"
          styleclass={'Standard'}
          type="text"
          value={state.username}
          updated={(e) => onValueChange(e, 'username')}
          placeholder="Username" />
      </div>

      <div className={classes.FormInput}>
        <label htmlFor="password">Password</label>

        <Input
          id="password"
          styleclass={'Standard'}
          type="password"
          value={state.password}
          updated={(e) => onValueChange(e, 'password')}
          placeholder="Password" />
      </div>

      {errState ? <div className={classes.ErrorMessage}>{errState}</div> : null}

      <Button click={loginRequest}>Submit</Button>
    </div>
  );
}

export default LoginForm;
