import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { workoutReducer } from '../Reducers';

import { AuthService } from '../Services/Auth.service';

const initialState = {
  workouts: [],
  isBackdropActive: false,
  isLoggedIn: AuthService.isLoggedIn()
};

const middleware = [thunk];

const store = createStore(
  workoutReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
