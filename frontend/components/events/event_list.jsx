import React from 'react';
import { Link, hashHistory } from 'react-router';
import moment from 'moment';

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {prompt: '', deleted: []};
    this.renderEvent = this.renderEvent.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.joinEvent = this.joinEvent.bind(this);
    this.leaveEvent = this.leaveEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  joinEvent(id) {
    let obj = {user_id: this.props.currentUserId, event_id: id};
    this.props.addAttendee(obj).then(() => this.setState({ prompt: ''}));
  }

  leaveEvent(user_id, event_id) {
    this.props.removeAttendee({user_id, event_id});
  }

  deleteEvent(id) {
    this.props.deleteEvent(id).then(
      () => this.setState({prompt: 'Other users can no longer view this.',
         deleted: this.state.deleted.concat([id]) }));
  }

  renderDashboard(event, idx) {
    return (
      <li key={idx}>
        <h3>{event.title}</h3>
        <p>{event.sport}</p>
        <p>{moment(event.time).format('LLLL')}</p>
        <p>{event.address}</p>
        <Link to={`users/${event.host_id}`} className='button'>See All Host's Events</Link>
      </li>
    );
  }

  renderEvent(event, idx) {
    const spaceLeft = (event.capacity - event.attending);
    return (
      <li key={idx}>
        <h3>{event.title}</h3>
        <h2>{event.sport}</h2>
        <p>{moment(event.time).format('LLLL')}</p>
        <p>{event.address}</p>
        <p><b>Capacity: </b>{event.capacity}</p>
        {this.renderButton(event, idx)}
      </li>
    );
  }

  renderButton(event, idx) {
    let shortName = this.props.host.name.split(' ')[0];
    const prompt = this.state.prompt;
      if (this.props.attending.includes(event.id)) {
        return (
          <div>
          <input type='submit' value={`Leave this Event`}
            className='button'
            onClick={() => this.leaveEvent(this.props.currentUserId, event.id)} />
          <p>You are attending this event</p></div>
        );
      } else if (this.props.host.id === this.props.currentUserId) {
          if (this.state.deleted.includes(event.id)) {
            return (
              <div>
                <p><b>{prompt}</b></p>
              </div>
            );
          } else {
          return (
            <div>
            <input type='button' value={`Delete Event`}
              className='button'
              onClick={() => this.deleteEvent(event.id)}/>
            </div>
          );
          }
      } else if (event.attending >= event.capacity) {
        return (
          <div>
          <input type='button' disabled value={`No Spaces Left`}
            className='button-disabled'/>
        </div>
      );
      }
    return (
      <input type='submit' value={`Join ${shortName}'s Meetup`}
        className='button'
        onClick={() => this.joinEvent(event.id)} />
    );
  }

  render() {
    const events = this.props.events;
    if (this.props.dashboard) {
      return (
        <ul className='event-list'>
          {events.map((event, idx) => this.renderDashboard(event, idx))}
        </ul>
      );
    } else {
    return (
      <ul className='event-list'>
        {events.map((event, idx) => this.renderEvent(event, idx))}
      </ul>
    );
    }
  }
}

export default EventList;
