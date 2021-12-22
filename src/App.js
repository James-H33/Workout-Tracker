import React, { Fragment } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { useSelector } from 'react-redux';

import Root from './Containers/Root/Root';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Workout from './Containers/Workout/Workout';
import History from './Containers/History/History';

import './App.css';

const URL = process.env.PUBLIC_URL;

function App() {
  const state = useSelector(s => s);

  const routes = () => {
    if (state.isLoggedIn) {
      return (
        <Fragment>
          <Route path="/" exact component={Home} />
          <Route path="/workout/:id" exact component={Workout} />
          <Route path="/login" exact component={Login} />
          <Route path="/history/:id" exact component={History} />
        </Fragment>
      );
    } else {
      return (<Route path="/" exact component={Login} />)
    }
  }

  return (
    <BrowserRouter basename={URL}>
      <Root>
        {routes()}
      </Root>
    </BrowserRouter>
  );
}

export default App;
