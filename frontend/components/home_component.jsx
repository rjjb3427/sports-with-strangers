import React from 'react';
import { Link } from 'react-router';
import ModalTest from './forms/modal';
const tagLines = ["Get started, let's watch the game",
"Get out and meet some other fans",
"Find someone who loves your team as much as you do",
"You know the players, know the fanbase",
"Other fans are just friends you haven't watched games with"];
let currentTag = tagLines[Math.floor(Math.random()*tagLines.length)];
const footer = () => (
  <div className='home-footer'>
    <h1 className='col-1'>Meetup with fellow fans to watch a game.</h1>
    <h2 className='col-1'>You and some others meet a host at a bar restaurant, or other venue.</h2>
    <h1 className='col-1'>Eat, drink, hangout! Sports can really bring people together.</h1>
  </div>
);

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.homeTagline.bind(this);
  }

  footer() {
    return (
      <div className='home-footer'>
        <h1 className='col-1'>Meetup with fellow fans to watch a game.</h1>
        <h2 className='col-1'>You and some others meet a host at a bar restaurant, or venue.</h2>
        <h1 className='col-1'>Eat, drink, hangout! Sports can really bring people together.</h1>
      </div>
    );
  }

  homeTagline() {
    if (this.props.loggedIn) {
      return (
        <Link to='/cities'>{currentTag}</Link>
      );
    } else {
      return (
          <ModalTest text={currentTag}/>
      );
    }
  }

  render() {
    return (
      <section className='home-main'>
      <div className="home-wrapper" >
        <div className='tagline'>
          {this.homeTagline()}
        </div>
      </div>
        {this.footer()}
      </section>
    );
  }
}
export default HomeComponent;
