import React from 'react';
import { Link, hashHistory } from 'react-router';


class CityShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {city: this.props.city};
  }

  componentWillMount() {
    this.props.fetchCurrentCity(this.props.city_id);
    this.props.fetchCityEvents(this.props.city_id);
  }

  componentWillReceiveProps(newProps){
    this.props.fetchCurrentCity(newProps.city_id).then(
      () => this.setState({city: this.props.city})
    );
    this.props.fetchCityEvents(newProps.city_id)
  }

  render() {
    const city = this.props.city;
    const events = this.props.events;
    if (!city) { return (
      <div></div>
    );}
    return (
      <div>
        {city.name}
        {events.eventList.map(event => <li>{event.title}</li>)}
      </div>
    );
  }
}
export default CityShow;
