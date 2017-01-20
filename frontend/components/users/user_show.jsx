import React from 'react';
import {Link, hashHistory} from 'react-router';
import moment from 'moment';
import EventListContainer from '../events/event_list_container';

class UserShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    }

  componentDidMount() {
    this.props.fetchUser(this.props.params.user_id).then(res => {
      this.setState({user: res});
    }, () => hashHistory.goBack());
  }

  render() {
    const user = this.state.user;
    if (user){
      const shortName = user.name.split(' ')[0];
      return (
        <div className='user-show'>
          <div className='profile'>
            <h1>{user.name}</h1>
            <img src={`${user.image}`} />
          </div>
          <section className='blurb'>
            <h2>{shortName} Hosts in {user.location}</h2><br/>
            <h4 className='user-show-email'>{user.email}</h4><br/>
            <p><b>What sports or teams do you like, and what to you like about hosting?</b></p>
            <p>{user.blurb}</p>
          </section>
          <section className='list-items'>
          <h4>Game Meet-Ups {shortName} is Hosting</h4>
          <EventListContainer
            events={user.hosting}
            host={this.state.user} />
          </section>
      </div>
      );
    } else {
      return (
        <div>
          Oops! Something Went Wrong.
        </div>
      );
    }
  }
}

export default UserShow;
