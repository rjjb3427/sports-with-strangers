import React from 'react';
import { Link } from 'react-router';
const tagLines = ["Get started, let's watch the game",
"Get out and meet some other fans",
"Find someone who loves your team as much as you do",
"You know the players, now know the fanbase",
"Other fans are just friends you haven't watched games with"];
let currentTag = tagLines[Math.floor(Math.random()*tagLines.length)];
const footer = () => (
  <div className='home-footer'>
    <h1 className='col-1'>Meetup with fellow fans to watch game</h1>
    <h2 className='col-1'>You some others meet a host at a venue</h2>
    <h1 className='col-1'>That's it! Sporting events bring people together</h1>
  </div>
);

const HomeComponent = () => (
  <section className='home-main'>
  <div className="home-wrapper">
    <Link to='cities'>{currentTag}</Link>
  </div>
    {footer()}
  </section>
);

export default HomeComponent;
