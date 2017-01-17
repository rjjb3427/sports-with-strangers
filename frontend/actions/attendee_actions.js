import * as attendeeApiUtil from '../util/attendee_api_util';
import {receiveEvent, receiveEventErrors} from './event_actions';

export const RECEIVE_CURRENT_USER_EVENT = "RECEIVE_CURRENT_USER_EVENT";
export const DELETE_ATTENDEE = "DELETE_ATTENDEE";

const receiveCurrentUserEvent = event => ({
  type: RECEIVE_CURRENT_USER_EVENT,
  event : event.event
});

const deleteAttendee = id => ({
  type: DELETE_ATTENDEE,
  id
});

export const addAttendee = attendee => dispatch => (
  attendeeApiUtil.addAttendee(attendee).then(res => dispatch(receiveCurrentUserEvent(res)),
  res => receiveEventErrors(res))
);

export const removeAttendee = (attendee) => dispatch => (
  attendeeApiUtil.removeAttendee(attendee).then(res => dispatch(deleteAttendee(res)))
);
