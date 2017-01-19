import React from 'react';
import EventListContainer from '../events/event_list_container';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const text = this.props.attending.length > 1 ? "Upcoming Meet-Ups" : "No Joined Meet-Ups";
    return (
      <div className='dashboard-wrapper'>
        <section className='list-items' id='dashboard-list'>
          <h1>{text}</h1>

          <EventListContainer events={this.props.attending} dashboard={true}/>
        </section>
        <span className='plus'><p>+<p id='host-new'>Host New</p></p>
        </span>
      </div>
    );
  }
}
export default Dashboard;
