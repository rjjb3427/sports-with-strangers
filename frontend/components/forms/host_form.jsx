import React from 'react';
import moment from 'moment';
import {hashHistory} from 'react-router';

class HostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      sport: '',
      time: '',
      address: '',
      capacity: '',
      host_id: this.props.currentUser.id,
      city_id: this.props.currentUser.city.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({host_id: this.props.currentUser.id,
      city_id: this.props.currentUser.city.id}, () => {
        this.props.createEvent(this.state).then(
        () => hashHistory.push('/dashboard'),
        () => this.setState({prompt: 'Please fill all fields.'}));
      });
  }

  render() {
    console.log(this.state);
    return (
    <div className='form'>
      <form onSubmit={this.handleSubmit} >
        <input type='text' placeholder='Meet-Up Name' value={this.state.title}
                             onChange={this.update('title')}/>
                           <input type='text' placeholder='Address of Venue'
          value={this.state.address}
          onChange={this.update('address')}/>
        <select className='dropdown' onChange={this.update('sport')}>
          <option>What Are You Watching?</option>
          <option value='Basketball'>Basketball</option>
          <option value='Football'>Football</option>
          <option value='Baseball'>Baseball</option>
          <option value='Soccer'>Soccer</option>
          <option value='Other'>Other</option>
        </select>

        <input type='number' placeholder='How Many Can Attend?'
          onChange={this.update('capacity')} /><br />
        Please Provide Date and Time <br/>
        <input type="datetime-local" value={this.state.time} onChange={this.update('time')}/>
        <input type='submit' value='Confirm Meet-Up' className='button' /><br />
      </form><br />
    {this.state.prompt}
  </div>  );
  }
}

export default HostForm;
