import { BACKDROP } from '../Actions/Types';

const updateBackdrop = (state, action) => {
  return { isBackdropActive: action.playload.isActive };
}

export const backdropReducer = (state = {}, action) => {
  switch (action.type) {
    case BACKDROP:
      return updateBackdrop(state, action);
    default:
    return state;
  }
}
