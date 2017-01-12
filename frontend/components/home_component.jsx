import React from 'react';
import { Link } from 'react-router';
const tagLines = ["Get started, let's watch the game",
"Get out and meet some other fans",
"Find someone who loves your team as much as you do",
"You know the players, now know the fanbase",
"Other fans are just friends you haven't watched games with"];
let currentTag = tagLines[Math.floor(Math.random()*tagLines.length)];

const HomeComponent = () => (
  <div className="home-wrapper">
    <Link to='cities'>{currentTag}</Link>
  </div>
);

export default HomeComponent;
