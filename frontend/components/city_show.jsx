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
    console.log(event);
    return (
      <li key={idx}>
        <h2>{event.title}</h2>
        <h3>{event.sport}</h3>
        <p></p>
        <p>{event.time}</p>
        <p>{event.address}</p>
        <p>{event.capacity}</p>
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
      </div>
    );
  }
}
export default CityShow;
