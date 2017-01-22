import React from 'react';
import {connect} from 'react-redux';
import EventList from './event_list';
import {addAttendee, removeAttendee} from '../../actions/attendee_actions';
import {deleteEvent} from '../../util/events_api_util';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUserId: state.session.currentUser.id,
    attending: state.session.currentUser.attending.map(evnt => evnt.id)
  };
};

const mapDispatchToProps = dispatch => ({
  addAttendee: attendee => dispatch(addAttendee(attendee)),
  removeAttendee: userWithHost => dispatch(removeAttendee(userWithHost)),
  deleteEvent: id => deleteEvent(id)
});
export default connect(mapStateToProps, mapDispatchToProps)(EventList);
