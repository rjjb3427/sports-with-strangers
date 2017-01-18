import React from 'react';
import {Link, hashHistory} from 'react-router';
import moment from 'moment';

class UserShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.renderHosted = this.renderHosted.bind(this);
  }

  componentDidMount() {
    this.props.fetchHost(this.props.params.user_id).then(res => {
      this.setState({user: res});
    }, () => hashHistory.goBack());
  }

  renderHosted(event, idx) {
    return (
      <li key={idx}>
        <h3>{event.title}</h3>
        <h2>{event.sport}</h2>
        <p><b>Time: </b>{moment(event.time).format('MMMM Do YYYY, h:mm')}</p>
        <p><b>Address: </b>{event.address}</p>
        <p><b>Capacity: </b>{event.capacity}</p>

      </li>
    );
  }

  render() {
    console.log(this.props);
    const user = this.state.user;
    if (user){
      const shortName = user.name.split(' ')[0];
      return (
        <div className='user-show'>
          <h1>{user.name}</h1>
          <ul className='user-show'>
          <h4>Events {shortName} is Hosting</h4>
          {user.hosting.map((evnt, idx) => this.renderHosted(evnt, idx))} 
          </ul>
          <h2>{user.email}</h2>
          <h2>Hosts in {user.location}</h2>
          <p>{user.blurb}</p>
        </div>
      );
    } else {
      return (
        <div>

        </div>
      );
    }
  }
}

export default UserShow;
