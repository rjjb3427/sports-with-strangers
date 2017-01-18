import react from 'react';
import {connect} from 'react-redux';
import UserShow from './user_show.jsx';
import {fetchUser} from '../../util/user_api_util';

const mapDispatchToProps = dispatch => ({
  fetchUser: id => fetchUser(id)
});

export default connect(null, mapDispatchToProps)(UserShow);
