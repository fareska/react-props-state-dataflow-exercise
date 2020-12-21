import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (<div id="register">
      {/* your code here */}
      {this.props.reservations.map(r=><p>{ r.day + ', ' +r.time}</p>)}

    </div>)
  }
}

export default Register