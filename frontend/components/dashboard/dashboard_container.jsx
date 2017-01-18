import React from 'react';
import {connect} from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = state => ({
  attending: state.session.currentUser.attending 
});

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
