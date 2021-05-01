import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Root from './Containers/Root/Root';
import Home from './Containers/Home/Home';
import Workout from './Containers/Workout/Workout';

import './App.css';

function App() {
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
