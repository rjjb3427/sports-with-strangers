import React from 'react';
import {connect} from 'react-redux';
import CityShow from './city_show';
import {fetchCurrentCity, fetchCities} from '../actions/city_actions';
import {fetchCityEvents} from '../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    city: state.cities.currentCity,
    events: state.events
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCurrentCity: id => dispatch(fetchCurrentCity(id)),
  fetchCityEvents: id => dispatch(fetchCityEvents(id))
});

window.fetchCurrentCity = fetchCurrentCity;
export default connect(mapStateToProps, mapDispatchToProps)(CityShow);
