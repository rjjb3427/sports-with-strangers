import React from 'react';
import NavBar from './navbar_container';

const App = (props) => (
  <div className='wrapper'>
    <NavBar />
    {props.children}
  </div>
);

export default App;
