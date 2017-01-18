import React from 'react';
import {Link, hashHistory} from 'react-router';
import moment from 'moment';
import EventListContainer from './event_list_container';

class UserShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    }

  componentDidMount() {
    this.props.fetchHost(this.props.params.user_id).then(res => {
      this.setState({user: res});
    }, () => hashHistory.goBack());
  }

  render() {
    console.log(this.props);
    const user = this.state.user;
    if (user){
      const shortName = user.name.split(' ')[0];
      return (
        <div className='user-show'>
          <div className='profile'>
            <h1>{user.name}</h1>
            <img src='http://orig10.deviantart.net/b1f3/f/2011/258/1/8/profile_picture_by_ff_stock-d49yyse.jpg' />
          </div>
          <section className='blurb'>
            <h2>Hosts in {user.location}</h2><br/>
            <h2 className='user-show-email'>{user.email}</h2><br/>
            <p>{user.blurb}</p>
          </section>
          <h4>Events {shortName} is Hosting</h4>
          <EventListContainer
            events={user.hosting}
            host={this.state.user} />
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
