import React from 'react';
import {Provider} from 'react-redux';
import HomeContainer from './home_container';
import CitiesIndexContainer from './cities_index_container';
import CityShowContainer from './city_show_container';
import UserShowContainer from './user_show_container';
import DashboardContainer from './dashboard_container';
import ModalTest from './modal';
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
        <Route path="/cities/:city_id" component={CityShowContainer} />
        <Route path="/users/:user_id" component={UserShowContainer} />
        <Route path="/dashboard" component={DashboardContainer}
                onEnter={_checkIfLogin}/>
      </Route>
    </Router>
  </Provider>
);};


export default Root;
