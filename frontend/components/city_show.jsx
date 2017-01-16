import React from 'react';
import { Link, hashHistory } from 'react-router';


class CityShow extends React.Component {
  constructor(props){
    super(props);
    this.renderEvent = this.renderEvent.bind(this);
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

  renderEvent(event, idx) {
    return (
      <li key={idx}>
        <h3>{event.title}</h3>
        <h2>{event.sport}</h2>
        <p><b>Host: </b>{event.host.name}</p>
        <p><b>Time: </b>{event.time}</p>
        <p><b>Address: </b>{event.address}</p>
        <p><b>Capacity: </b>{event.capacity}</p>
        <input type='submit' value={`Join ${event.host.name}`} className='join-button'/>
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
        <ul>
          {events.map((event, idx) => this.renderEvent(event, idx))}
        </ul>
        <h2 className='tagline'>Discover our great community in the {city.tagline}.</h2>
      </div>
    );
  }
}
export default CityShow;
