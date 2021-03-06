import React from 'react';
import { Link, hashHistory } from 'react-router';
import moment from 'moment';


class CityShow extends React.Component {
  constructor(props){
    super(props);
    this.renderEvent = this.renderEvent.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.joinEvent = this.joinEvent.bind(this);
    this.leaveEvent = this.leaveEvent.bind(this);
    this.footer = this.footer.bind(this);
    this.toNum = this.toNum.bind(this);
  }
  componentDidMount() {
    this.props.fetchCurrentCity(this.props.params.city_id);
  }

  componentWillReceiveProps(newProps){
    let currentId = this.props.city ? this.props.city.id : null;
    if (currentId != newProps.params.city_id) {
      this.props.fetchCurrentCity(newProps.params.city_id);
    }
  }

  toNum(n) {
    let words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight',
    'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen',
    'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty', 'Twenty-One'];
    return words[n] ? words[n] : n;
  }

  footer() {
    return (
      <div className='city-footer'>
        <h1>Join any {`${this.props.city.name}`} events you would like to attend.</h1>
        <h1>Visit your dashboard to view your upcoming events and edit your personal information.</h1>
        <h1>Become a host by creating a new event from the hosting page.</h1>
      </div>
    );
  }

  joinEvent(id) {
    let obj = {user_id: this.props.currentUserId, event_id: id};
    this.props.addAttendee(obj).then(
      () => this.props.fetchCurrentCity(this.props.params.city_id));
  }

  leaveEvent(user_id, event_id) {
    this.props.removeAttendee({user_id, event_id}).then(
      () => this.props.fetchCurrentCity(this.props.params.city_id));
  }

  renderButton(event, idx) {
    let shortName = event.host.name.split(' ')[0];
      if (this.props.attending.includes(event.id)) {
        return (
          <div>
          <input type='submit' value={`Leave this Event`}
            className='button'
            onClick={() => this.leaveEvent(this.props.currentUserId, event.id)} />
          <p>You are attending this event</p></div>
        );
      } else if (event.host.id === this.props.currentUserId) {
        return (
          <div>
          <input type='button' disabled value={`Cannot Join Own Event`}
            className='button-disabled'/>
          <p><b>You are hosting this event</b></p></div>
        );
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

  renderEvent(event, idx) {
    let spaceArray = [];
    for (var i = 0; i < event.capacity; i++) {
      let current = i < event.attending ? "▰" : "▱";
      spaceArray.push(current);
    }
    return (
      <li key={idx}>
        <h3>{event.title}</h3>
          <Link to={`users/${event.host.id}`}>
          <img className ='user-thumbnail' src={`${event.host.image}`} />
          </Link>
          <p>Hosted by {event.host.name}</p>
        <p>{event.sport}</p>
        <p>{moment(event.time).format('LLL')}</p>
        <p>{event.address}</p>
        <p>{this.toNum(event.attending)} Members Attending</p>
        <p><b>{spaceArray.join('')}</b></p>
        {this.renderButton(event, idx)}
      </li>
    );
  }

  render() {
    const city = this.props.city;
    const events = this.props.events;
    if (!city || !events) { return (
      <div></div>
    );}
    return (
      <div className='city-show'>
        <div className='city-header'>
          <img src={`${city.image}`} className='city-image' />
        </div>
        <h1 className='city-title'>{city.name}</h1>
        <section className='list-items'>
        <ul>
          {events.map((event, idx) => this.renderEvent(event, idx))}
        </ul>
        </section>
        <h2 className='city-tagline'>Discover our great community in The {city.tagline}.</h2>
        {this.footer()}
      </div>
    );
  }
}
export default CityShow;
