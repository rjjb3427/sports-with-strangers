import React from 'react';
import {Provider} from 'react-redux';
import SessionFormContainer from './session_form_container';
import HomeComponent from './home_component';
import ModalTest from './modal';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';

const Root = ({store}) => {
  const _redirectIfLogin = (nextState, replace) => {
    let usr = store.getState().session.currentUser;
    if (usr) {
      replace('/');
    }
  };

  return (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeComponent} />
      </Route>
    </Router>
  </Provider>
);};


export default Root;
