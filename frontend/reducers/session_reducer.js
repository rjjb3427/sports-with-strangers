import merge from 'lodash/merge';
import {RECEIVE_ERRORS,
        RECEIVE_CURRENT_USER,
        LOGOUT_USER, CLEAR_ERRORS} from '../actions/session_actions';
import {RECEIVE_CURRENT_USER_EVENT, DELETE_ATTENDEE} from '../actions/attendee_actions';

const _initialState = {
    currentUser: null,
    errors: []
};

const sessionReducer = (state=_initialState, action) => {
  let newState = merge({}, state);
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ERRORS:
      newState.errors = action.errors.responseJSON;
      return newState;
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.user;
      return newState;
    case RECEIVE_CURRENT_USER_EVENT:
      newState.currentUser.attending.push(action.event);
      return newState;
    case DELETE_ATTENDEE:
      let newAttending = newState.currentUser.attending.filter(obj => {
        (obj.id !== action.id);
      });
      newState.currentUser.attending = newAttending;
      return newState;
    case LOGOUT_USER:
      return _initialState;
    case CLEAR_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};


export default sessionReducer;
