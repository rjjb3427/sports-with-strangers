import merge from 'lodash/merge';
import {RECEIVE_CITIES, RECEIVE_CITY, RECEIVE_CURRENT_CITY} from '../actions/city_actions';

const _initialState = {
  currentCity: null,
  allCities: []
};

const citiesReducer = (state=_initialState, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_CITIES:
      newState.allCities = action.cities;
      return newState;
    case RECEIVE_CURRENT_CITY:
      newState.currentCity = action.city;
      return newState;
    default:
      return state;
  }
};

export default citiesReducer;
