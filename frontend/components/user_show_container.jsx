import react from 'react';
import {connect} from 'react-redux';
import UserShow from './user_show.jsx';
import {fetchHost} from '../util/user_api_util';
import {addAttendee, removeAttendee} from '../actions/attendee_actions';

const mapDispatchToProps = dispatch => ({
  fetchHost: id => fetchHost(id),
  addAttendee: attendee => dispatch(addAttendee(attendee)),
  removeAttendee: userWithHost => dispatch(removeAttendee(userWithHost))
});

const mapStateToProps = state => ({
  attending: state.session.currentUser.attending.map(evnt => evnt.id),
  currentUserId: state.session.currentUser.id
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
