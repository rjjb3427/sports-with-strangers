import react from 'react';
import {connect} from 'react-redux';
import UserShow from './user_show.jsx';
import {fetchHost} from '../util/user_api_util';

const mapDispatchToProps = dispatch => ({
  fetchHost: id => fetchHost(id)
});

export default connect(null, mapDispatchToProps)(UserShow);
