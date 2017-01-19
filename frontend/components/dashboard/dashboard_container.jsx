import React from 'react';
import {connect} from 'react-redux';
import Dashboard from './dashboard';
import {updateUser} from '../../util/user_api_util';
const mapStateToProps = state => {
  let user = state.session.currentUser;
  let attributes = {
    email: user.email,
    location: user.location,
    blurb: user.blurb,
    name: user.name,
    id: user.id };
  return {
    attending: user.attending,
    currentUser: attributes
  };
};

const mapDispatchToProps = dispatch => ({
  updateUser: user => updateUser(user)
});


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
