import React from 'react';
import {Provider} from 'react-redux';
import HomeContainer from './home_container';
import CitiesIndexContainer from './cities/cities_index_container';
import CityShowContainer from './cities/city_show_container';
import UserShowContainer from './users/user_show_container';
import DashboardContainer from './dashboard/dashboard_container';
import HostFormContainer from './forms/host_form_container';
import ModalTest from './forms/modal';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';

const Root = ({store}) => {
  const _checkIfLogin = (nextState, replace) => {
    let usr = store.getState().session.currentUser;
    if (!usr) {
      replace('/');
    }
  };

  return (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeContainer} />
        <Route path="/cities" onEnter={_checkIfLogin} component={CitiesIndexContainer} />
        <Route path="/cities/:city_id" onEnter={_checkIfLogin} component={CityShowContainer} />
        <Route path="/users/:user_id" onEnter={_checkIfLogin} component={UserShowContainer} />
        <Route path="/host" component={HostFormContainer} onEnter={_checkIfLogin} />
        <Route path="/dashboard" component={DashboardContainer} onEnter={_checkIfLogin}/>
      </Route>
    </Router>
  </Provider>
);};


export default Root;
