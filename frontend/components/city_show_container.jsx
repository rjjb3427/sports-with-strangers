import React from 'react';
import {connect} from 'react-redux';
import CityShow from './city_show';
import {fetchCurrentCity, fetchCities} from '../actions/city_actions';
import {addAttendee} from '../actions/attendee_actions';

const mapStateToProps = (state, ownProps) => {
  let events = state.cities.currentCity ? state.cities.currentCity.events : null;
  let attending = state.session.currentUser.attending.map(evnt => evnt.id);
  let currentUserId = state.session.currentUser.id;
  return {
    city: state.cities.currentCity,
    events,
    attending,
    currentUserId
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCurrentCity: id => dispatch(fetchCurrentCity(id)),
  addAttendee: attendee => dispatch(addAttendee(attendee))
});
export default connect(mapStateToProps, mapDispatchToProps)(CityShow);
