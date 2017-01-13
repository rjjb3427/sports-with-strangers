import React from 'react';
import NavBar from './navbar_container';

const App = (props) => (
  <div className='wrapper'>
    <NavBar />
    {props.children}
  </div>
);

//TODO Remove this
window.event = {title: 'New Event2', address: '23213 street',
   sport: 'basketball', host_id: 1, city_id: 1, capacity: 3, time: 'Jan 20'};

export default App;
