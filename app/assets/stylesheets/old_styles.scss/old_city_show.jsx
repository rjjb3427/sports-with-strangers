// import React from 'react';
// import { Link, hashHistory } from 'react-router';
//
//
// class CityShow extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {city: this.props.city, events: this.props.events};
//   }
//   componentDidMount() {
//     this.props.fetchCurrentCity(this.props.params.city_id);
//     this.props.fetchCityEvents(this.props.params.city_id);
//   }
//
//   componentWillReceiveProps(newProps){
//     let events = this.props.events;
//     let hasEvents = events[0] instanceof Object ? true : false;
//     if (this.state.city !== newProps.city){
//         this.setState({city: newProps.city});
//     } else if (this.props.city && newProps.params.city_id !== this.props.city.id){
//       this.props.fetchCurrentCity(newProps.params.city_id);
//     }
//     if (newProps.events !== this.state.events){
//       this.setState({events: newProps.events});
//     } else if (hasEvents && events[0].city_id !== newProps.city.id){
//       this.props.fetchCityEvents(newProps.city.id);
//     }
//   }
//
//   render() {
//     console.log('state',this.state);
//     const city = this.state.city;
//     const events = this.state.events;
//     if (!city || !events) { return (
//       <div></div>
//     );}
//     return (
//       <div>
//         {city.name}
//         {events.map(event => <li>{event.title}</li>)}
//       </div>
//     );
//   }
// }
// export default CityShow;
