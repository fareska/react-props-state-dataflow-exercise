import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return (
      <div id="calendar">
        {this.props.reservations.map(r=><p>{r.name + ' has a reservation on ' + r.day + ',@ ' +r.time}</p>)}

      </div>
    )
  }
}

export default Calendar