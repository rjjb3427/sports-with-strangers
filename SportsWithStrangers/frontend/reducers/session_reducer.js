import merge from 'lodash/merge';
import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER, LOGOUT_USER} from '../actions/session_actions';

const _initialState = {
    currentUser: null,
    errors: []
};

const sessionReducer = (state=_initialState, action) => {
  let newState = merge({}, _initialState);
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.user;
      return newState;
    case LOGOUT_USER:
      return newState;
    default:
      return state;
  }
};


export default sessionReducer;
