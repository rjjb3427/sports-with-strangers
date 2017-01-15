import * as SessionApiUtil from '../util/session_api_util';
import store from '../store/store';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";


const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const login = (user) => dispatch => (
  SessionApiUtil.login(user).then(res => dispatch(receiveCurrentUser(res)),
  res => dispatch(receiveErrors(res)))
);

export const logout = () => dispatch => (
  SessionApiUtil.logout().then(res => dispatch(receiveCurrentUser(null)),
  res => dispatch(receiveErrors(res)))
);

export const signup = user => dispatch => (
  SessionApiUtil.signup(user).then(res => dispatch(receiveCurrentUser(res)),
  res => dispatch(receiveErrors(res)))
);

window.login = login;
