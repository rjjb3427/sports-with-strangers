import react from 'react';
import {connect} from 'react-redux';
import HomeComponent from './home_component';

const mapStateToProps = state => {
  let loggedIn = state.session.currentUser ? true : false;
  return { loggedIn };
};

export default connect(mapStateToProps)(HomeComponent);
