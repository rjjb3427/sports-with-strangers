import React from 'react';
import {Link} from 'react-router';

class CitiesIndex extends React.Component {
  constructor(props){
    super(props);
    this.renderCities = this.renderCities.bind(this);
  }

  componentWillMount() {
    this.props.fetchCities();
  }

  renderCities(city, idx) {
    return (
      <li key={idx} className='cities-index'>
      <Link to={`cities/${city.id}`}>
      <img src={`/assets/${city.image}`} className='cities-index' />
    </Link>
      <h3 className='cities-title'>{city.name}</h3>
      </li>
    );
  }

  render() {
    return (
      <div className='cities-index'>
        <h1 className='cities-header-text'>Host Or Join An Event In Your City</h1>
      <ul className='cities-index'>
        {this.props.cities.map((city, idx) => this.renderCities(city, idx))}
      </ul>
      </div>
    );
  }
}

export default CitiesIndex;
