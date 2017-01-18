import React from 'react';
import { Link, hashHistory } from 'react-router';
import moment from 'moment';

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.renderEvent = this.renderEvent.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.joinEvent = this.joinEvent.bind(this);
    this.leaveEvent = this.leaveEvent.bind(this);
  }

  joinEvent(id) {
    let obj = {user_id: this.props.currentUserId, event_id: id};
    this.props.addAttendee(obj);
  }

  leaveEvent(user_id, event_id) {
    this.props.removeAttendee({user_id, event_id});
  }

  renderEvent(event, idx) {
    return (
      <li key={idx}>
        <h3>{event.title}</h3>
        <h2>{event.sport}</h2>
        <p><b>Time: </b>{moment(event.time).format('MMMM Do YYYY, h:mm')}</p>
        <p><b>Address: </b>{event.address}</p>
        <p><b>Capacity: </b>{event.capacity}</p>
        {this.renderButton(event, idx)}
      </li>
    );
  }

  renderButton(event, idx) {
    let shortName = this.props.host.name.split(' ')[0];
      if (this.props.attending.includes(event.id)) {
        return (
          <div>
          <input type='submit' value={`Leave this Event`}
            className='join-button'
            onClick={() => this.leaveEvent(this.props.currentUserId, event.id)} />
          <p>You are attending this event</p></div>
        );
      } else if (this.props.host.id === this.props.currentUserId) {
        return (
          <div>
          <input type='button' disabled value={`Cannot Join Own Event`}
            className='join-button-disabled'/>
          <p><b>You are hosting this event</b></p></div>
        );
      }
    return (
      <input type='submit' value={`Join ${shortName}'s Meetup`}
        className='join-button'
        onClick={() => this.joinEvent(event.id)} />
    );
  }

  render() {
    console.log(this.props);
    const events = this.props.events;
    return (
      <ul className='event-list'>
        {events.map((event, idx) => this.renderEvent(event, idx))}
      </ul>
    );
  }

}

export default EventList;
