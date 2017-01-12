import React from 'react';
import {connect} from 'react-redux';
import {fetchCities, fetchCity} from '../actions/city_actions';
import CitiesIndex from './cities_index';

const mapStateToProps = state => ({
  cities: state.cities.allCities
});

const mapDispatchToProps = dispatch => ({
  fetchCities: () => dispatch(fetchCities()),
  fetchCity: id => dispatch(fetchCity(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesIndex);
