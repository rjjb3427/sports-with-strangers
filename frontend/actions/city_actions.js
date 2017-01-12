import * as CitiesApiUtil from '../util/cities_api_util';
import store from '../store/store';
import {receiveErrors} from './session_actions';

export const RECEIVE_CITIES = 'RECEIVE_CITIES';export const RECEIVE_CURRENT_CITY = 'RECEIVE_CURRENT_CITY';

const receiveCurrentCity = city => ({
  type: RECEIVE_CURRENT_CITY,
  city
});

const receiveCities = (cities) => ({
  type: RECEIVE_CITIES,
  cities
});

export const fetchCities = () => dispatch => (
  CitiesApiUtil.fetchCities().then(res => dispatch(receiveCities(res)),
  res => dispatch(receiveErrors(res)))
);

export const fetchCurrentCity = id => dispatch => (
  CitiesApiUtil.fetchCity(id).then(res => dispatch(receiveCurrentCity(res)),
  res => dispatch(receiveErrors(res)))
);

window.fetchCurrentCity = fetchCurrentCity;
window.fetchCities = fetchCities;
