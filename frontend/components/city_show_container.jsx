import React from 'react';
import {connect} from 'react-redux';
import CityShow from './city_show';
import {fetchCurrentCity, fetchCities} from '../actions/city_actions';
// import {fetchCityEvents, clearEvents} from '../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  let events = state.cities.currentCity ? state.cities.currentCity.events : null;
  return {
    city: state.cities.currentCity,
    events
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCurrentCity: id => dispatch(fetchCurrentCity(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(CityShow);
