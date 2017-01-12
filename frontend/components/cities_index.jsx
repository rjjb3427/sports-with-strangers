import React from 'react';

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
      <li key={idx}>
        {city.name}
      <img src={`/assets/${city.image}`} className='city-index-img' />
      </li>
    );
  }

  render() {
    return (
      <ul className='cities-index'>
        {this.props.cities.map((city, idx) => this.renderCities(city, idx))}
      </ul>
    );
  }
}

export default CitiesIndex;
