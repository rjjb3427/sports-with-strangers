import React from 'react';
import {logout} from '../actions/session_actions';
import {connect} from 'react-redux';
import NavBar from './navbar';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  loggedIn: state.session.currentUser ? true : false
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
