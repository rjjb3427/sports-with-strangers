import React from 'react';
import {Provider} from 'react-redux';
import SessionFormContainer from './session_form_container';
import HomeComponent from './home_component';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeComponent} />
      <Route path="login" component={SessionFormContainer} />
      <Route path="signup" component={SessionFormContainer} />
      </Route>
    </Router>
  </Provider>
);


export default Root;
