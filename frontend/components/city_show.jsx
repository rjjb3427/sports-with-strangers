import React from 'react';
import { Link, hashHistory } from 'react-router';


class CityShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchCurrentCity(this.props.city_id);
  }

  render() {
    const city = this.props.city;
    if (!city) { return (
      <div></div>
    );}
    return (
      <div>
        {city.name}
      </div>
    );
  }
}

export default CityShow;
