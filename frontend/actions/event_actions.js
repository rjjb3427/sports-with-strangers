import * as EventsApiUtil from '../util/events_api_util';
import store from '../store/store';
import {receiveErrors} from './session_actions';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";
export const REMOVE_EVENTS = "REMOVE_EVENTS";

export const clearEvents = () => dispatch => (
  dispatch({type: REMOVE_EVENTS})
);

export const receiveEvents = (events) => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const receiveEventErrors = errors => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
});

export const fetchHostEvents = idType => dispatch => (
  EventsApiUtil.fetchHostEvents(idType).then(res => dispatch(receiveEvents(res)),
  res => dispatch(receiveEventErrors(res)))
);

export const fetchCityEvents = id => dispatch => (
  EventsApiUtil.fetchCityEvents(id).then(res => dispatch(receiveEvents(res)),
  res => dispatch(receiveEventErrors(res)))
);

export const createEvent = event => dispatch => (
  EventsApiUtil.createEvent(event).then(res => dispatch(receiveEvent(res),
  console.log(res)))
);
