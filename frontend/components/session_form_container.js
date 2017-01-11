import React from 'react';
import {login, logout, signup} from '../actions/session_actions';
import {connect} from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = state => {
  let loggedIn = state.session.currentUser ? true : false;
  let user;
  if (loggedIn) {
    user = state.session.currentUser;
  } else {
    user = { first_name: '', last_name: '', location: '', image: '', blurb: ''};
  }
  return { user, loggedIn };
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout()),
  signup: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
