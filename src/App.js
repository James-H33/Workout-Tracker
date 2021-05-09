import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Root from './Containers/Root/Root';
import Home from './Containers/Home/Home';
import Workout from './Containers/Workout/Workout';

import './App.css';
import reducer from './Context/reducer';
import { WorkoutContext } from './Context/Contexts';

/*
{
 workouts: [
      {
        id: 1,
        title: 'Lower Body 1',
        exercises: [
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
    ]
  }

*/

function App() {
  const [ state, dispatch ] = React.useReducer(reducer, { workouts: [] });

  useEffect(() => {
    const stateFromStorage = localStorage.getItem('workout-tracker-state');
    dispatch({ type: 'NewState', payload: JSON.parse(stateFromStorage) });
    return  dispatch({ type: 'StoreState' });
  }, []);


  return (
    <BrowserRouter>
      <Root>
        <WorkoutContext.Provider value={{ state, dispatch }}>
          <Route path="/" exact component={Home} />
          <Route path="/workout/:id" exact component={Workout} />
        </WorkoutContext.Provider>
      </Root>
    </BrowserRouter>
  );
}

export default App;
