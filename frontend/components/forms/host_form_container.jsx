import React from 'react';
import {connect} from 'react-redux';
import HostForm from './host_form';
import {createEvent} from '../../util/events_api_util';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => createEvent(event)
});

export default connect(mapStateToProps, mapDispatchToProps)(HostForm);
