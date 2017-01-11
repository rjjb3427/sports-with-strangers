import React from 'react';
import NavBar from './navbar_container';

const App = (props) => (
  <div>
    <h3>Sports with Strangers</h3>
    <NavBar />
    {props.children}
  </div>
);

export default App;
