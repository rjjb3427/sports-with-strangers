import React from 'react';
import { Link } from 'react-router';
const tagLines = ["Get started, let's watch the game",
"Get out and meet some other fans",
"Find someone who loves your team as much as you do",
"You know the players, know the fanbase",
"Other fans are just friends you haven't watched games with"];
let currentTag = tagLines[Math.floor(Math.random()*tagLines.length)];
let prompt;
const footer = () => (
  <div className='home-footer'>
    <h1 className='col-1'>Meetup with fellow fans to watch a game.</h1>
    <h2 className='col-1'>You and some others meet a host at a bar restaurant, or venue.</h2>
    <h1 className='col-1'>Eat, drink, hangout! Sports can really bring people together.</h1>
  </div>
);

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {prompt: ''};
    this.togglePrompt = this.togglePrompt.bind(this);
  }

  togglePrompt() {
    if (!this.props.loggedIn) {
      if (this.state.prompt.length < 1) {
        this.setState({prompt: 'Please Sign Up or Login to View Events'});
      } else {
        this.setState({prompt: ''});
      }
    }
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

  render() {
    return (
      <section className='home-main'>
      <div className="home-wrapper" >
        <Link to='cities' onMouseLeave={this.togglePrompt} onMouseOver={this.togglePrompt}>{currentTag}</Link>
        <h2 className='home-prompt'>{this.state.prompt}</h2>
      </div>
        {this.footer()}
      </section>
    );
  }
}

// const HomeComponent = () => (
//   <section className='home-main'>
//   <div className="home-wrapper" >
//     <Link to='cities' onMouseOver={() => prompt = "Please Login To View Events"}
//       onMouseLeave={() => prompt = ''}>{currentTag}</Link>
//     <h2 className='home-prompt'>{prompt}</h2>
//   </div>
//     {footer()}
//   </section>
// );

export default HomeComponent;
