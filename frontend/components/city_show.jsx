import React from 'react';
import { Link, hashHistory } from 'react-router';


class CityShow extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.fetchCurrentCity(this.props.params.city_id);
  }

  componentWillReceiveProps(newProps){
    let currentId = this.props.city ? this.props.city.id : null;
    if (currentId !== newProps.params.city_id) {
      this.props.fetchCurrentCity(newProps.params.city_id);
    }
  }

  render() {
    const city = this.props.city;
    const events = this.props.events;
    if (!city || !events) { return (
      <div></div>
    );}
    return (
      <div>
        {city.name}
        {events.map(event => <li>{event.title}</li>)}
      </div>
    );
  }
}
export default CityShow;
