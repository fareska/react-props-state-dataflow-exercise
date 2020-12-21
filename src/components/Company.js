import React, { Component } from 'react';
import SubCompany from './SubCompany'

class Company extends Component {
  render() {
    
    let companyName = this.props.name
    return(
        <SubCompany name={companyName} />
    ) 
      

  }
}

export default Company