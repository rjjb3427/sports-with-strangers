import React from 'react';
import {connect} from 'react-redux';
import CityShow from './city_show';
import {fetchCurrentCity} from '../actions/city_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    city_id: ownProps.params.city_id,
    city: state.cities.currentCity
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCurrentCity: id => dispatch(fetchCurrentCity(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CityShow);
