import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { workoutReducer } from '../Reducers';

const initialState = { workouts: [], isBackdropActive: false };

const middleware = [thunk];

const store = createStore(
  workoutReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
