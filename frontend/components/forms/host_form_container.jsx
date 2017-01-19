import React from 'react';
import {connect} from 'react-redux';
import HostForm from './host_form';
import {createEvent} from '../../util/events_api_util';
import {fetchUser} from '../../util/user_api_util';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => createEvent(event),
  fetchUser: id => fetchUser(id)
});

export default connect(mapStateToProps, mapDispatchToProps)(HostForm);
