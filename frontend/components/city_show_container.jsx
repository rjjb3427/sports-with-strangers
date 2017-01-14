import React from 'react';
import {connect} from 'react-redux';
import CityShow from './city_show';
import {fetchCurrentCity} from '../actions/city_actions';
import {fetchCityEvents} from '../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    city_id: ownProps.params.city_id,
    city: state.cities.currentCity,
    events: state.events
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCurrentCity: id => dispatch(fetchCurrentCity(id)),
  fetchCityEvents: id => dispatch(fetchCityEvents(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CityShow);
