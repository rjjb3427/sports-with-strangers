import React from 'react';
import {connect} from 'react-redux';
import {fetchCities} from '../../actions/city_actions';
import CitiesIndex from './cities_index';

const mapStateToProps = state => ({
  cities: state.cities.allCities
});

const mapDispatchToProps = dispatch => ({
  fetchCities: () => dispatch(fetchCities())
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesIndex);
