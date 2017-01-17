import React from 'react';
import {login, logout, signup, clearErrors} from '../actions/session_actions';
import {fetchCurrentCity} from '../actions/city_actions';
import {connect} from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  let errors = [];
  if (state.session.errors) {
    errors = state.session.errors;
  }
  let page = ownProps.page;
  let loggedIn = state.session.currentUser ? true : false;
  return { loggedIn, errors };
};

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout()),
  signup: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
