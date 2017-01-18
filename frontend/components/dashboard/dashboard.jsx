import React from 'react';
import EventListContainer from '../events/event_list_container';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='dashboard-wrapper'>
        <h1>Attending</h1>
        <section className='list-items'>
          <EventListContainer events={this.props.attending} dashboard={true}/>
        </section>
        <span>+</span>
        <h5>Host New Event</h5>
      </div>
    );
  }
}
export default Dashboard;
