import * as attendeeApiUtil from '../util/attendee_api_util';
import {receiveEvent, receiveEventErrors} from './event_actions';

export const RECEIVE_CURRENT_USER_EVENT = "RECEIVE_CURRENT_USER_EVENT";

const receiveCurrentUserEvent = event => ({
  type: RECEIVE_CURRENT_USER_EVENT,
  event : event.event
});

export const addAttendee = attendee => dispatch => (
  attendeeApiUtil.addAttendee(attendee).then(res => dispatch(receiveCurrentUserEvent(res)),
  res => receiveEventErrors(res))
);
