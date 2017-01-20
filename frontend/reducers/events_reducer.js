import merge from 'lodash/merge';
import {RECEIVE_EVENTS,
        RECEIVE_EVENT,
        RECEIVE_EVENT_ERRORS,
        REMOVE_EVENTS} from '../actions/event_actions';

const _initialState = {
  errors: null,
  eventList: []
};

const eventsReducer = (state=_initialState, action) => {
  let newState = merge({}, state);
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_EVENTS:
      newState.eventList = action.events;
      newState.errors = null;
      return newState;
    case RECEIVE_EVENT:
      newState.eventList.push(action.event);
      newState.errors = null;
      return newState;
    case RECEIVE_EVENT_ERRORS:
      newState.errors = action.errors.responseJSON;
      return newState;
    case REMOVE_EVENTS:
      newState.eventList = [];
      return newState;
    default:
      return state;
  }
};

export default eventsReducer;
