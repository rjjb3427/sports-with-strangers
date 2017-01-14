import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import citiesReducer from './cities_reducer';
import eventsReducer from './events_reducer';

export default combineReducers({
  session: sessionReducer,
  cities: citiesReducer,
  events: eventsReducer
});
