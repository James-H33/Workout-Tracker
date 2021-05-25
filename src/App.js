import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';

import Root from './Containers/Root/Root';
import Home from './Containers/Home/Home';
import Workout from './Containers/Workout/Workout';
import { NEW_STATE, STORE_STATE } from './Actions';

import './App.css';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const stateFromStorage = localStorage.getItem('workout-tracker-state');
    dispatch({ type: NEW_STATE, payload: JSON.parse(stateFromStorage) });
    return dispatch({ type: STORE_STATE });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Root>
        <Route path="/" exact component={Home} />
        <Route path="/workout/:id" exact component={Workout} />
      </Root>
    </BrowserRouter>
  );
}

export default App;
