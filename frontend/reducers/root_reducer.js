import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import citiesReducer from './cities_reducer';

export default combineReducers({
  session: sessionReducer,
  cities: citiesReducer
});
